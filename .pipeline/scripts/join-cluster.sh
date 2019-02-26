#!/bin/bash
set -Eeu
set -o pipefail

function get_env_value(){
  local ENVDEF="$1"
  if [[ "$(jq -erM 'if .valueFrom then 0 else 1 end' <<< "$ENVDEF")" -eq 0 ]] ; then
    local SECRET_NAME=$(jq -erM '.valueFrom.secretKeyRef.name' <<< "$ENVDEF")
    local SECRET_KEY=$(jq -erM '.valueFrom.secretKeyRef.key' <<< "$ENVDEF")

    oc -n $NAMESPACE get "secret/$SECRET_NAME" -o json | jq -rM ".data.\"${SECRET_KEY}\"" | base64 -D - 
  else
    jq -erM '.value' <<< "$ENVDEF"
  fi
  #return 34
}

function set_env_value(){
  local RESOURCE="$1"
  local NAME="$2"
  local VALUE="$3"
  echo "name=${NAME} value=${VALUE}"

  # TODO: Update templates as well
  if [[ "$(jq ".spec.template.spec.containers[0].env[] | select(.name == \"${NAME}\") | if .valueFrom.secretKeyRef then 0 else 1 end" <<< "${RESOURCE}")" -eq 0 ]] ; then
    local SECRET_NAME=$(jq -erM ".spec.template.spec.containers[0].env[] | select(.name == \"${NAME}\") | .valueFrom.secretKeyRef.name" <<< "$RESOURCE")
    local SECRET_KEY=$(jq -erM ".spec.template.spec.containers[0].env[] | select(.name == \"${NAME}\") | .valueFrom.secretKeyRef.key" <<< "$RESOURCE")
    set -x
    oc -n $NAMESPACE patch "secret/${SECRET_NAME}" -p "{\"stringData\": {\"${SECRET_KEY}\":\"$(echo "${VALUE}" | tr -d '\n')\"}}"
    # oc -n $NAMESPACE patch "secret/${SECRET_NAME}" -p "{\"data\": {\"${SECRET_KEY}\":\"$(base64 <<< "${VALUE}" | tr -d '\n')\"}}"
    { set +x; } 2>/dev/null
  else
    #jq -r '.metadata.name' <<< "${RESOURCE}"
    oc -n $NAMESPACE set env "$( jq -r '(.kind + "/" + .metadata.name)' <<< "${RESOURCE}")" "${NAME}=$(echo $VALUE | tr -d '\n')"
  fi
}

function waitPatroniClusterMemberIsUp(){
  local pod=$1
  local IS_UP=0
  echo "Waiting for ${pod} member to fully come up";
  while [ $IS_UP -eq 0 ]; do
      sleep 2
      #set -x
      oc -n $NAMESPACE rsh "${pod}" patronictl list -f json 2>/dev/null | jq -ecM ".[] | select (.Member == \"$pod\" and .\"Lag in MB\" == 0 and .State == \"running\")" >/dev/null && IS_UP=1 || true
      #{ set +x; } 2>/dev/null
  done
}

function waitReplicasEqualZero(){
  local statefulset=$1
  local IS_DOWN=0
  echo "Waiting for ${statefulset} to be down";
  while [ $IS_DOWN -eq 0 ]; do
      sleep 2
      oc -n $NAMESPACE get "statefulset/${statefulset}" -o custom-columns=replicas:.status.replicas --no-headers | awk '{if($1 == 0) exit 0; else exit 1; end}' && IS_DOWN=1 || true
  done
}

NAMESPACE="$1"
SOURCE_STATEFULSET="$2"
TARGET_STATEFULSET="$3"

SOURCE_TEMPLATE=$(oc -n $NAMESPACE get statefulset/$SOURCE_STATEFULSET -o json | jq -cM '.spec.template.spec.containers[0]')

PATRONI_SCOPE=$(jq -rM '.env[] | select(.name == "PATRONI_SCOPE") | .value' <<< "$SOURCE_TEMPLATE")
echo "PATRONI_SCOPE:${PATRONI_SCOPE}"

PATRONI_KUBERNETES_LABELS=$(jq -rM '.env[] | select(.name == "PATRONI_KUBERNETES_LABELS") | .value' <<< "$SOURCE_TEMPLATE")
echo "PATRONI_KUBERNETES_LABELS:${PATRONI_KUBERNETES_LABELS}"

jq -r type <<< "$PATRONI_KUBERNETES_LABELS" >/dev/null 2>/dev/null || { printf "ERROR: 'PATRONI_KUBERNETES_LABELS' is NOT a valid JSON string.\n${PATRONI_KUBERNETES_LABELS}\nhint:You can check using https://codebeautify.org/jsonvalidator\n"; exit 4;}


PATRONI_SUPERUSER_USERNAME=$(get_env_value "$(jq -erM '.env[] | select(.name == "PATRONI_SUPERUSER_USERNAME")' <<< "$SOURCE_TEMPLATE")")
PATRONI_SUPERUSER_PASSWORD=$(get_env_value "$(jq -erM '.env[] | select(.name == "PATRONI_SUPERUSER_PASSWORD")' <<< "$SOURCE_TEMPLATE")")
PATRONI_REPLICATION_USERNAME=$(get_env_value "$(jq -erM '.env[] | select(.name == "PATRONI_REPLICATION_USERNAME")' <<< "$SOURCE_TEMPLATE")")
PATRONI_REPLICATION_PASSWORD=$(get_env_value "$(jq -erM '.env[] | select(.name == "PATRONI_REPLICATION_PASSWORD")' <<< "$SOURCE_TEMPLATE")")

# 1) scale statefulset to 0
oc -n $NAMESPACE scale --replicas 0 "statefulset/$TARGET_STATEFULSET"
waitReplicasEqualZero "${TARGET_STATEFULSET}"

# 2) backup configuration
[ ! -f "${TARGET_STATEFULSET}.original.json" ] && oc -n $NAMESPACE get "statefulset/$TARGET_STATEFULSET" --export -o json > "${TARGET_STATEFULSET}.original.json"
# 3) remove PVCs
oc -n $NAMESPACE get pvc -l "statefulset=${TARGET_STATEFULSET}"
read -p "press enter---"
oc -n $NAMESPACE delete pvc -l "statefulset=${TARGET_STATEFULSET}"
# 4) apply configuration changes
#   a) Update Environment Variables
oc -n $NAMESPACE set env --overwrite=true "statefulset/$TARGET_STATEFULSET" \
"PATRONI_SCOPE=${PATRONI_SCOPE}" "PATRONI_SUPERUSER_USERNAME=${PATRONI_SUPERUSER_USERNAME}" \
"PATRONI_SUPERUSER_PASSWORD=${PATRONI_SUPERUSER_PASSWORD}" "PATRONI_REPLICATION_USERNAME=${PATRONI_REPLICATION_USERNAME}" \
"PATRONI_REPLICATION_PASSWORD=${PATRONI_REPLICATION_PASSWORD}" \
"PATRONI_KUBERNETES_LABELS=${PATRONI_KUBERNETES_LABELS}"
#   b) Update .spec.template.metadata.labels
ORIGINAL_TEMPLATE=$(<"${TARGET_STATEFULSET}.original.json")
PATCH_LABELS=$(jq -c '.[1].spec.template.metadata.labels * .[0]'  <<< "[${PATRONI_KUBERNETES_LABELS}, ${ORIGINAL_TEMPLATE}]")
oc -n $NAMESPACE patch "statefulset/$TARGET_STATEFULSET" -p "{\"spec\": {\"template\":{\"metadata\":{\"labels\":${PATCH_LABELS}}}}}"
read -p "press enter---after patch"
#   c) Update superuser and replication passwords?
#      i) scale down to single node/master
#     ii) update password in master
#    iii) update secret/env with new password
# 5) Startup node and wait for replication
oc -n $NAMESPACE scale --replicas 1 "statefulset/$TARGET_STATEFULSET"
waitPatroniClusterMemberIsUp "${TARGET_STATEFULSET}-0"
sleep 5
oc -n $NAMESPACE scale --replicas 0 "statefulset/$TARGET_STATEFULSET"

# 6) restore configuration
oc -n $NAMESPACE replace -f "${TARGET_STATEFULSET}.original.json"

# 7) update configuration
set_env_value "${ORIGINAL_TEMPLATE}" 'PATRONI_SUPERUSER_USERNAME' "${PATRONI_SUPERUSER_USERNAME}"
set_env_value "${ORIGINAL_TEMPLATE}" 'PATRONI_SUPERUSER_PASSWORD' "${PATRONI_SUPERUSER_PASSWORD}"
set_env_value "${ORIGINAL_TEMPLATE}" 'PATRONI_REPLICATION_USERNAME' "${PATRONI_REPLICATION_USERNAME}"
set_env_value "${ORIGINAL_TEMPLATE}" 'PATRONI_REPLICATION_PASSWORD' "${PATRONI_REPLICATION_PASSWORD}"
read -p "press enter---before annotating"
oc annotate --overwrite "configmap/${TARGET_STATEFULSET}-config" "initialize=$(oc -n $NAMESPACE get "configmap/${PATRONI_SCOPE}-config" -o 'custom-columns=initialize:.metadata.annotations.initialize' --no-headers)"

# 8) Start as new cluster
oc -n $NAMESPACE scale --replicas 1 "statefulset/$TARGET_STATEFULSET"
waitPatroniClusterMemberIsUp "${TARGET_STATEFULSET}-0"

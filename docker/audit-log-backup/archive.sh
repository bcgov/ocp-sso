#!/bin/bash
set -Eeuo pipefail

# Setup:
DIRECTORY="${LOG_PATH:-'/var/log/eap'}"
# how far back to expire the logs:
EXPIRY_LENGTH="${SSO_EXPIRY_LENGTH:-1 month ago}"
WEBHOOK_URL="${SSO_WEBHOOK_URL:-placeholder}"
NAMESPACE_NAME="${NAMESPACE_NAME:-sandbox}"

function channelNotification {
  webhookPayload='{"text":"'$NAMESPACE_NAME' - '$1'"}'
  curl -H "Content-Type: application/json" -X POST --data "$webhookPayload" $WEBHOOK_URL
}

# Check if log directory exists:
if [ ! -d "$DIRECTORY" ]; then
  echo 'No logs created yet!'
  # send notifiation and exit:
  webhookMsg="No logs created yet for $LOG_DATE"
  channelNotification "$webhookMsg"
  exit 0
fi

cd $DIRECTORY
# 1) compress old log files into a daily .tar.gz file
# NOTE: To avoid error message "file changed as we read it", we need to copy the files to a temporary location
find . -name '*-keycloak.log.*' | grep -hoE '[0-9]+\-[0-9]+\-[0-9]+$' | sort | uniq | xargs -I {} sh -c 'DIR=$(pwd) && mkdir -p "/tmp/{}" && cp *.{} /tmp/{}/ && pushd /tmp/{}/ && tar -czf "$DIR/{}.tar.gz" * && popd && rm -rf "/tmp/{}" && find . -maxdepth 1 -type f -name "*-keycloak.log.{}" -delete'
# e.g.: List contents -> tar -tvf 2019-11-14.tar.gz

# 2) Delete files that are older than a specific time

EXPIRY_OLDER_THAN=$(date -d "${EXPIRY_LENGTH}" '+%Y%m%d')
find . -maxdepth 1 -name '*.tar.gz' | xargs -I {} basename -s '.tar.gz' {} | awk -v "ref=${EXPIRY_OLDER_THAN}" '{r=ref +0; b=gensub(/\-/,"", "g", $1) + 0; if (b < r) print $1;}' | xargs -I {} rm -v '{}.tar.gz'

channelNotification "Last Archive 10 Files:\n$(find . -maxdepth 1 -name '*.tar.gz' | sort | tail -n 10 | xargs ls -lah)"

echo 'Done'

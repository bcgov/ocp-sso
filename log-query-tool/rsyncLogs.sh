#! /bin/bash
# VARIABLES:
# LOG_PATH <string>
# DC_LABEL <string> the deployment config label when doing oc get pods -l deploymentConfig=...
# DEPENDANCIES
# - oc
# - jq

# RETURNS:
# - last line returns location of tmp directory that contains log files
# - capture this by piping into 'tail -n 1'
# get sso pod name (any pod)
POD_NAME=$(oc get pod -l deploymentConfig=$DC_LABEL -o json | jq -r '.items[0].metadata.name')

# copy contents of log files to a temp directory
TEMP_DIR=$(mktemp -d)

oc rsync $POD_NAME:$LOG_PATH $TEMP_DIR

ONLY_LOG_TEMP=$(mktemp -d)


ls "$TEMP_DIR"/**/*  | grep .log | xargs -I {} cp {} $ONLY_LOG_TEMP

rm -rf $TEMP_DIR

echo $ONLY_LOG_TEMP



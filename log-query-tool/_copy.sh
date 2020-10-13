#! /bin/bash
# VARIABLES:
# LOG_PATH <string>

# DEPENDANCIES
# - oc
# - jq

# RETURNS:
# - last line returns location of tmp directory that contains log files
# - capture this by piping into 'tail -n 1'
# get sso pod name (any pod)
POD_NAME=$(oc get pod -l deploymentConfig=sso-prod -o json | jq -r '.items[0].metadata.name')

# copy contents of log files to a temp directory
TEMP_DIR=$(mktemp -d)

oc rsync $POD_NAME:$LOG_PATH $TEMP_DIR

ONLY_LOG_TEMP=$(mktemp -d)


# somethings not right here. Need to get all the log files from temp dir
ls "$TEMP_DIR"/**/*  | grep .log | xargs -I {} cp {} $ONLY_LOG_TEMP

rm -rf $TEMP_DIR

echo $ONLY_LOG_TEMP



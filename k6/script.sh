#!/bin/sh
# ENVIRONMENT VARIABLES
# LOG_OUTPUT_PATH string the path where json files are written
JSON_FILENAME=$(date +%d-%m-%Y-%H:%M:%S).json

# set default path
if [ -z "$LOG_OUTPUT_PATH" ]; then
LOG_OUTPUT_PATH=/tmp
fi

k6 run index.js \
-e SSO_BASE_URL=$SSO_BASE_URL -e SSO_REALM=$SSO_REALM -e SSO_CLIENT=$SSO_CLIENT \
-e USER_PASSWORD=$USER_PASSWORD \
-e SSO_SA_CLIENT_ID=$SSO_SA_CLIENT_ID -e SSO_SA_CLIENT_PASSWORD=$SSO_SA_CLIENT_PASSWORD \
--config ./config/index.json \
--out json=$LOG_OUTPUT_PATH/$JSON_FILENAME

#!/bin/bash
set -Eeuo pipefail

# Setup:
DIRECTORY="${LOG_PATH:-'/var/log/eap'}"
# which date of logs to compress:
LOG_PERIOD="${SSO_LOG_PERIOD:-yesterday}"
# how far back to expire the logs:
EXPIRY_LENGTH="${SSO_EXPIRY_LENGTH:-1 month ago}"
WEBHOOK_URL="${SSO_WEBHOOK_URL:-placeholder}"
NAMESPACE_NAME="${NAMESPACE_NAME:-sandbox}"

# Get the dates:
LOG_DATE=$(date -d "${LOG_PERIOD}" '+%Y-%m-%d')
EXPIRY_DATE=$(date -d "${EXPIRY_LENGTH}" '+%Y-%m-%d')
echo $LOG_DATE $EXPIRY_DATE

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
# Check for new log files:
newFiles=$(shopt -s nullglob dotglob; echo *.log.${LOG_DATE})
if (( ${#newFiles} ))
then
  echo "Compressing file for $LOG_DATE"
  # archive new logs:
  tar -cvzf ${LOG_DATE}.tar.gz *.log.${LOG_DATE}
  # delete the log file:
  rm *.log.${LOG_DATE}
  # delete expired logs, no error exit:
  rm ${EXPIRY_DATE}.tar.gz || true
  rm *.log.${EXPIRY_DATE} || true
  # send notifiation:
  webhookMsg="Log backup done for $LOG_DATE"
  channelNotification "$webhookMsg"
else
  # send notifiation:
  webhookMsg="No new logs for $LOG_DATE"
  channelNotification "$webhookMsg"
fi

echo 'Done'

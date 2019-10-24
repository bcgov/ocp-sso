#!/bin/bash
set -Eeuo pipefail

# This file should be provided/mounted:
source "audit-log-env.sh"
# DIRECTORY
# EXPIRY_LENGTH
# LOG_PERIOD

if [ ! -d "$DIRECTORY" ]; then
  echo 'No logs created yet!'
fi

LOG_DATE=$(date -v-${LOG_PERIOD} '+%Y-%m-%d')
EXPIRY_DATE=$(date -v-${EXPIRY_LENGTH} '+%Y-%m-%d')

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
fi

echo 'Done'
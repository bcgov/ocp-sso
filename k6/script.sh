#!/bin/sh
# ENVIRONMENT VARIABLES
# LOG_OUTPUT_PATH string the path where json files are written
JSON_FILENAME=$(date +%d-%m-%Y-%H:%M:%S).json

# set default path
if [ -z "$LOG_OUTPUT_PATH" ]; then
LOG_OUTPUT_PATH=/tmp
fi

k6 run index.js --config ./config/index.json --out json=$LOG_OUTPUT_PATH/$JSON_FILENAME

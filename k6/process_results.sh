#!/bin/bash

## Dependancies
# jq-1.6

## Environment Variables
# JSON_FILE_PATH string 

## RETURNS: a summary report of median, average, max, and min values for different 
# data points returns from the k6 tests

declare -a groups=("::Client APIs::Get clients" "::Client APIs::Create clients" "::Client APIs::Delete clients")
echo ""
echo "=========================================="
echo "Finding max, median, average, and minimums"
echo "=========================================="
echo ""

for i in "${groups[@]}"
do
  echo "Statistics for ${i} http request duration"
  echo ""
  MIN=$(jq --arg GROUP "$i" -s '. | map(select(.type=="Point" and .metric == "http_req_duration" and .data.tags.status >= "200" and .data.tags.group==$GROUP)) | min_by(.data.value) | .data.value' $JSON_FILE_PATH)
  MAX=$(jq --arg GROUP "$i" -s '. | map(select(.type=="Point" and .metric == "http_req_duration" and .data.tags.status >= "200" and .data.tags.group==$GROUP)) | max_by(.data.value) | .data.value' $JSON_FILE_PATH)
  AVG=$(jq --arg GROUP "$i" -s '. | map(select(.type=="Point" and .metric == "http_req_duration" and .data.tags.status >= "200" and .data.tags.group==$GROUP) | .data.value) | add/length' $JSON_FILE_PATH)
  MED=$(jq --arg GROUP "$i" -s '. | map(select(.type=="Point" and .metric == "http_req_duration" and .data.tags.status >= "200" and .data.tags.group==$GROUP) | .data.value) | sort | .[length / 2 | floor ]' $JSON_FILE_PATH)

  echo "max: $MAX"
  echo "min: $MIN"
  echo "avg: $AVG"
  echo "med: $MED"
  echo ""
done
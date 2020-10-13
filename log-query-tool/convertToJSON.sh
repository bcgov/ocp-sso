#! /bin/bash
# VARIABLES:
# FILE_PATH <string> this is where the logs are stored
TEMP_DIR=$(mktemp -d)
echo "$TEMP_DIR TEMP DIR"

# DEPENDANCIES
# - jq
# the files aren't 100% json ready yet they are single line json formatted objects 
# but need to be comma seperated
function convertToJSON() {
  _FILE_NAME=$1
  # overwrite file
  echo "adding a comma to each log output"
  CONTENT_WITH_COMMAS=$(cat $_FILE_NAME | sed -e 's/$/,/')
  # remove trailing comma and convert to json 
  ALMOST_JSON=$(echo $CONTENT_WITH_COMMAS)
  echo "removing trailing comma for $_FILE_NAME"
  ALMOST_JSON=${ALMOST_JSON%?}
  echo "writing $_FILE_NAME.json"
  JSON_FILENAME=$_FILE_NAME.json 

  echo [ > $TEMP_DIR/$JSON_FILENAME
  echo $ALMOST_JSON >> $TEMP_DIR/$JSON_FILENAME
  echo ']' >> $TEMP_DIR/$JSON_FILENAME
  echo "finished writing to $TEMP_DIR/$JSON_FILENAME"
}

echo "JSON converted for files"
export -f convertToJSON
ls $FILE_PATH| xargs -I {} bash -c 'convertToJSON "$@"' _ $FILE_PATH/{} $TEMP_DIR

echo "REMOVING LOG FILES IN $FILE_PATH"

rm -rf $FILE_PATH

echo "JSON Files can be found in: "
echo $TEMP_DIR



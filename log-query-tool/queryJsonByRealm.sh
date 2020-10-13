#! /bin/bash
# VARIABLES:
# JSON_FILE_PATH <string> this is where the json files are stored

# DEPENDANCIES
# - jq
# the files aren't 100% json ready yet they are single line json formatted objects 
# but need to be comma seperated
REALM=$1
echo "json files in dir"
JSON_FILES=$(ls $JSON_FILE_PATH)
echo $JSON_FILES

function filterJSONByRealm() {
  _FILE_NAME=$1
  # overwrite file
  REALM_JSON=$(cat $_FILE_NAME | jq -r --arg REALM "$REALM" '[] | select(.message | test("realmId=$REALM"))' )

  echo "writing $_FILE_NAME"
  echo $REALM_JSON > $_FILE_NAME
}

echo "filtering JSON"
export -f filterJSONByRealm
ls $JSON_FILE_PATH  xargs -I {} bash -c 'filterJSONByRealm "$@"' _ $JSON_FILE_PATH/{} $TEMP_DIR

echo "filter complete"
echo $JSON_FILE_PATH



# Log Query Tool

This tool helps debug our audit logs. The log files are gigantic. Usually we need to debug at the realm level and so what this tool will do is convert the logs into JSON format and filter based on the realm name. 

## Available Scripts

- `rsyncLogs.sh`: This will oc rsync the log files to your local workstation in a `tmp` directory. The last line of output is the location of the log files on your local workstation.

- `convertToJson.sh`: Will take the `.log` files and convert them into valid JSON in __new tmp directory__. The original tmp directory that contained the `.log` files is deleted in the process.

- `queryJsonByRealm.sh`: Will read through the JSON files in the temp directory from `convertToJson.sh` and run a `jq` query to filter out by `realmId`

## How to use

> the `rsyncLogs.sh` has a hardcoded label query it looks for pods with `deploymentConfig=$LABEL`

1. log into your oc namespace and rysnc log files over `LOG_PATH=<path to audit logs in pod> DC_LABEL=<pod deployConfig label> ./rsyncLogs.sh`


2. convert logs into JSON. `FILE_PATH=<path to logs in your localworkstation> ./convertToJson.sh`

3. query JSON by realm. `JSON_FILE_PATH=<path to json files> ./queryJsonByRealm.sh <realmId>`


With a oneshot you could try:

```sh
  FILE_PATH=$(LOG_PATH=<path to audit logs in pod> DC_LABEL=<pod deployConfig label> ./rsyncLogs.sh | tail -n 1) \
  JSON_FILE_PATH=$(./convertToJson.sh | tail -n 1) \
  ./queryJsonByRealm.sh <realmId>
```
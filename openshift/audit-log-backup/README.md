# CronJob for Keycloak audit logs backup and compress 

This CronJob will compress the latest logs with timestamp, and remove outdated logs/zip.

Find Dockerfile and log backup scripts [here](../../docker/audit-log-backup/).

### Configuration including:
- when to run the cronjob: SCHEDULE
- the time period on compression task: SSO_LOG_PERIOD
- expiry period for logs: SSO_LOG_EXPIRY_LENGTH
- the name of the persistent volume claim containing the logs: CLAIM_NAME
- the path to find and mount the logs: MOUNT_PATH

### To run the cronjob:
```shell
# Build in the tools namespace:
oc process -f audit-log-backup/backup-bc.yaml | oc apply -f -

# Setup Rocketchat webhook secret:
oc process -f audit-log-backup/backup-cron-secret-template.yaml | oc apply -f -

# Get the PVC containing logs:
oc get pvc | grep -i logs

# Start the cronjob:
# 1. Setup the cronjob configurations in backup-cron.yaml
# 2. Apply the cronjob:
oc process -f audit-log-backup/backup-cron.yaml -p CLAIM_NAME=<pvc_name> | oc apply -f -

# Testing:
oc create job audit-logs-backup-cron --from=cronjob/audit-logs-backup-cron
oc delete job audit-logs-backup-cron
```

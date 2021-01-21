## State Sync

State Sync is a job you can run in order to syncronize state between two patroni stateful sets (leveraging backupcontainer).

## Pre-Requisites

The state sync job utilizes [StorageMigration](https://github.com/BCDevOps/StorageMigration/) and the [BackupContainer](https://github.com/BCDevOps/backup-container). 

### Assumptions
- you have edit access in Cluster A and B
- you have previously built the Storage Migration image in both clusters (this will require a manual processing of the build infrastructure)
- you have backup container deployments running in Cluster A and Cluster B

## Steps

These pre reqs need to happen first!
### Pre Reqs

1. Login to Cluster A
2. Build StorageMigration Image in tools namespace if you haven't already
```sh
curl https://raw.githubusercontent.com/BCDevOps/StorageMigration/master/openshift/templates/pvc-migrator-build.yaml | oc process -f - | oc apply -f -
```
3. Login to the Cluster A namespace that contains the source PVC you wish to clone to Cluster B
4. Find out volume size of the source pvc
```sh
_BACKUP_PVC_SIZE=$(oc get pvc/<backup primary pvc name>  -o json | jq -r '.spec.resources.requests.storage')
```
5. Create a backup container deployment in Cluster B. Take note of the PVC size for the backups and process that in the backup template (see openshift/backup/README.md)

7. Scale down the backup container to zero in both Clusters
```
oc scale dc/<backup container name> --replicas=0
```
8. Create the Storage Migration DC to migrate the state

1. Login to Cluster A
2. Scale down front end service to zero to stop serving requests
3. Login to Cluster B
4. Scale down front end service to zero to stop serving requests
5. Take a backup of database and store path to backup file
6. Login to Cluster B
7. Spin up dynamic pod  with oc cli 
8. Login to Cluster A in pod 
9. Rsync backup container file from cluster A cronjob to cluster B cron Job
10. Scale up Cluster A front end 
11. Exit dynamic pod
12. Scale up Cluster B front end




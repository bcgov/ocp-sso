## State Sync

State Sync is a job you can run in order to syncronize state between two patroni stateful sets (leveraging backupcontainer).


## Steps

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




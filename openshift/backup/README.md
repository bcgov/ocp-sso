# Backup database and test restore

This is following the backup-container from https://github.com/BCDevOps/backup-container

0. setup Rocketchat webhook with the script from ./rocketchat-script/rocket.chat.integration.js

1. image build:
```
# in the tools namespace:
oc process --param-file=backup-build.param -f backup-build.json | oc create -f -
```

2. Request NFS

3. Update the ./backup/backup.conf and backup-deploy.param

4. Create deployment template:
```
# run the script to generate param and config:
./backup-deploy.overrides.sh
  # provide the RocketChat webhook, skip FTP
  # this will generate a deployment parameter overide file and a configmap template
```
```
# in dev/test/prod:
oc create -f backup-conf-configmap.json
oc process \n 
--param-file=backup-deploy.param --param-file=backup-deploy.overrides.param \n
-f backup-deploy.json -o yaml | oc create -f -
```
```
# tag image in tools to trigger deployment:
oc tag backup:latest backup:<new-tag>
```

5. Run backup and verify:
```
# rsh into backup pod:
# view config:
./backup.sh -c
# list all backup:
./backup.sh -l
# run backup:
./backup.sh -1
# verify:
./backup.sh -s -v all
```

6. See notification on Rocketchat

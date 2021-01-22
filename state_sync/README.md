## State Sync

State Sync is a job you can run in order to syncronize state between two patroni stateful sets (leveraging backup-container).

## How it works

The state_sync utility utilizes context to connect between to openshift clusters (A & B). It will bounce between these clusters to spin up/down and run processes in order to syncronize state from the Cluster A pvc to the Cluster B pvc. This is a one way process and is completely idemptotent.

## Pre-Requisites

- The state sync job utilizes [StorageMigration](https://github.com/BCDevOps/StorageMigration/) and the [BackupContainer](https://github.com/BCDevOps/backup-container). 

### Assumptions
- you have edit access in Cluster A and B
- you have backup container deployments running in Cluster A and Cluster B
- you have two contexts (one pointing to Cluster A and another to Cluster B)
  - login to both clusters from your local workstation
  - run `oc config get-contexts`
  - source a context for each login, the namespace it logs into is unimportant
  ```sh
    # sample output
    xdwiwd-dev/console-pathfinder-gov-bc-ca:8443/patricksimonian                                                         console-pathfinder-gov-bc-ca:8443
    de0974-test/api-silver-devops-gov-bc-ca:6443/patricksimonian@github                                                      api-silver-devops-gov-bc-ca:6443 

    # a context has the pattern <namespace>/<cluster url>/<user id>
    # source out the contexts and save them for later. You wil be applying them to your var file
  ```
## Steps

1. copy the vars file and fill in the details
2. Run the playbook `ansible-playbook state_sync.yml`
  - if you want to run the playbook without being prompted you can add `--extra-vars has_cluster_contexts=yes`
3. When the playbook is complete you will have the Cluster A PVC copied to Cluster B. In addition both backup containers will be available for further work. You should do an immediate restore in Cluster B and continue with your maintenance at this point.
4. when you have completed your state migration you may scale up the front end redhat service and continue testing!


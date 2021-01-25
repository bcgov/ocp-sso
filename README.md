# Scripted Installation

## Prerequisites
Secrets needs to be manually created as "templates". The name has to match each secret respective `as-copy-of` annotation.
```
oc process -f openshift/sso74-x509-postgresql-secrets.yaml -p 'NAME=template.sso' -p 'SUFFIX=' -l part-of=rh-sso,managed-by=template,shared=true  | oc create -f -
oc process -f openshift/sso74-x509-secrets.yaml -p 'NAME=template.sso' -p 'SUFFIX=' -l part-of=rh-sso,managed-by=template,shared=true  | oc create -f -

#if you need to remove all, or re-create/update, use the label
oc delete secret -l part-of=rh-sso,shared=true

```

Additionally, a secret must be created to set up the docker account. In your namespace, run the command 
    ```oc create secret docker-registry <secret-name> --docker-server=docker.io --docker-username=<docker-username> --docker-password=<docker-password> --docker-email=unused```

Then link your secret with the command
    ```oc process -f ./openshift/k6/sa-linked-image-pull-secrets.yaml -p NAMESPACE=<namespace> -p SECRET_NAME=<secret-name> | oc apply -f - -n <namespace>```

## Building
```
cd .pipeline && ./npmw build -- --pr=9
```
note: replace '9' with a valid pull-request number

## Deploying
```
cd .pipeline && ./npmw deploy -- --pr=9 --env=dev
```
note: replace '9' with a valid pull-request number

## Cleanup
```
#switch to the right project/namespace on OpenShift
oc delete all -l !shared,github-repo=ocp-sso,env-id=pr-9
```

# Manual Installation
If you are just looking for quickly spin up an instance of RH-SSO

1. Setup
```shell
# Please note that:
# 6d70e7-* are the namespaces for SSO in ocp4
# 3d5c3f-* are the sandbox namespaces for SSO in ocp4

# Create Network Security Policy
oc -n 6d70e7-tools process -f openshift/nsp.yaml -p 'NAMESPACE=6d70e7-tools' | oc -n 6d70e7-tools create -f -
oc -n 3d5c3f-dev process -f openshift/nsp.yaml -p 'NAMESPACE=3d5c3f-dev' | oc -n 3d5c3f-dev create -f -
```

2. Import Images
The template requires an ImageStream in the same namespace
- check for available RedHat images here: https://catalog.redhat.com/software/containers/search
- Please note that sso7.4 image is now on registry.redhat.io which requires auth

- *RH SSO Base Image*
```shell
# login:
docker login https://registry.redhat.io -u <username> -p <password>

# if secret exists, just import here directly
oc -n 6d70e7-tools import-image sso74-openshift-rhel8:7.4 --from=registry.redhat.io/rh-sso-7/sso74-openshift-rhel8:7.4 --confirm

# import to deployment namespace
oc tag 6d70e7-tools/sso74-openshift-rhel8:7.4 3d5c3f-dev/sso74-openshift-rhel8:7.4
```

Currently we are on postgres v10, will need to update DB version after OCP4 migration is completed

- *Patroni v10 Base Image*
```shell
# clone the platform-services repo with the oc templates, and go to openshift folder:
git clone https://github.com/BCDevOps/platform-services.git
cd apps/pgsql/patroni/openshift

# create bc
oc -n 6d70e7-tools process -f openshift/build.yaml \
 -p "GIT_URI=https://github.com/BCDevOps/platform-services" \
 -p "GIT_REF=master" \
 -p SUFFIX=-pg10 \
 -p OUT_VERSION=v10-latest \
 -p PG_VERSION=10 | oc -n 6d70e7-tools create -f -

# build image
oc -n 6d70e7-tools start-build patroni-pg10

# import to deployment namespace
oc tag 6d70e7-tools/patroni:v10-latest 3d5c3f-dev/patroni:v10-latest
```

3. Create PostgreSQL
```shell
oc project 3d5c3f-dev

# create secret
oc process -f openshift/sso74-x509-postgresql-secrets.yaml \
-p NAME=sso-pgsql-patroni \
-p SUFFIX=-dev \
-l app=rh-sso-sandbox,name=postgresql,component=database,part-of=rh-sso,managed-by=template  | oc apply -f -

# deploy
oc process -f openshift/sso74-x509-postgresql.yaml \
-p NAME=sso-pgsql-patroni \
-p SUFFIX=-dev \
-p IMAGE_REGISTRY=image-registry.openshift-image-registry.svc:5000 \
-p IMAGE_STREAM_NAMESPACE=6d70e7-tools \
-p IMAGE_STREAM_TAG=patroni:v10-latest \
-p STORAGE_CLASS=netapp-block-standard \
-l app=rh-sso-sandbox,name=postgresql,component=database,part-of=rh-sso,managed-by=template | oc apply -f -
```

4. Create Keycloak/RH-SSO
```shell
# skipping BCGov chain builds and use RHSSO image directly
oc tag sso74-openshift-rhel8:7.4 sso:7.4

# Create secrets and configmap
oc process -f openshift/sso74-x509-secrets.yaml \
-p NAME=sso \
-p SUFFIX=-dev \
-l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template  | oc apply -f -

oc process -f openshift/sso74-x509-configmap.yaml \
-p NAME=sso \
-p SUFFIX=-dev \
-l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template  | oc apply -f -

# deploy
oc process -f openshift/sso74-x509.yaml \
-p NAME=sso \
-p SUFFIX=-dev \
-p VERSION=7.4 \
-p DB_SECRET_NAME=sso-pgsql-patroni-dev \
-p DB_SECRET_DATABASE_KEY=app-db-name \
-p DB_SECRET_USERNAME_KEY=app-db-username \
-p DB_SECRET_PASSWORD_KEY=app-db-password \
-p DB_SERVICE_HOST=sso-pgsql-patroni-master-dev \
-p CPU_REQUEST=250m \
-p CPU_LIMIT=1 \
-l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template | oc apply -f -

# note that if starting a brand new instance fails with error "failed to initialize DB", then you will need to run step 5. Otherwise you are good!
```

5. Initialize the SSO instance
Use the job to complete the DB initialization work when needed, then scale up SSO dc.

```shell
# scale down sso dc
oc scale dc sso-dev --replicas=0

# create job
oc process -f openshift/job-to-initialize-sso74.yaml \
-p DC_NAME=sso \
-p SUFFIX=-dev \
-p IMAGE=image-registry.openshift-image-registry.svc:5000/3d5c3f-dev/sso:7.4 \
-p DB_SECRET_NAME=sso-pgsql-patroni-dev \
-p DB_SECRET_DATABASE_KEY=app-db-name \
-p DB_SECRET_USERNAME_KEY=app-db-username \
-p DB_SECRET_PASSWORD_KEY=app-db-password \
-p DB_SERVICE_HOST=sso-pgsql-patroni-master-dev \
-l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template | oc apply -f -

# check sso dc is scaled to 0, then run job
oc scale job/job-to-initiate-sso-74 --replicas=1

# after it's complete, scale down job pod and scale up sso dc
oc scale job/job-to-initiate-sso-74 --replicas=0

# bring back sso dc:
oc scale dc sso-dev --replicas=3
```

6. Delete everything
```shell
oc get statefulset,dc,svc,route,pvc,secret,configmap,pdb -l app=rh-sso-sandbox
oc delete statefulset,dc,svc,route,pvc,secret,configmap,pdb -l app=rh-sso-sandbox

# please note that DB PVCs will not be deleted as it contains app data. you will need to delete them separately:
oc get pvc
oc delete pvc <ss_pvc_name>_0 <ss_pvc_name>_1 <ss_pvc_name>_2
```

# Reference:
https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.4/html/red_hat_single_sign-on_for_openshift/get_started#Example-Deploying-SSO

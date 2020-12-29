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

1. Switch to project
```
oc project devops-sso-sandbox
```

2. Create PostgreSQL
```
oc process -f openshift/sso74-x509-postgresql-secrets.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=postgresql,component=database,part-of=rh-sso,managed-by=template  | oc apply -f -

oc process -f openshift/sso74-x509-postgresql.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=postgresql,component=database,part-of=rh-sso,managed-by=template | oc apply -f -
```

3. Import Image
The template requires an ImageStream in the same namespace
- check for available images here: https://catalog.redhat.com/software/containers/search
- Please note that sso7.4 image is now on registry.redhat.io which requires auth

```shell
# login:
docker login https://registry.redhat.io -u <username> -p <password>

# make sure the image stream secret exists, otherwise we will need to import it to openshift namespace first
oc -n devops-sso-tools get secret imagestreamsecret

# if not, then import to openshift namespace first
oc --as=<service_account> -n openshift import-image sso74-openshift-rhel8 --confirm
oc --as=<service_account> -n openshift import-image sso74-openshift-rhel8:7.4 --from=registry.redhat.io/rh-sso-7/sso74-openshift-rhel8:7.4 # for a specific version

# if secret exists, just import here directly
oc -n devops-sso-tools import-image sso74-openshift-rhel8:7.4 --from=registry.redhat.io/rh-sso-7/sso74-openshift-rhel8:7.4 --confirm

# import to current namespace
oc tag devops-sso-tools/sso74-openshift-rhel8:7.4 sso74-openshift-rhel8:7.4
```

4. Create Keycloak/RH-SSO
```
oc process -f openshift/sso74-x509-secrets.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template  | oc apply -f -

oc process -f openshift/sso74-x509.yaml -p NAME=rh-sso -p SUFFIX=-dev -p VERSION=1.3-7 -l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template | oc apply -f -
```

5. Delete everything
```
oc delete rc,svc,dc,route,pvc,secret -l app=rh-sso-sandbox
```

# Reference:
https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.4/html/red_hat_single_sign-on_for_openshift/get_started#Example-Deploying-SSO

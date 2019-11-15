# Scripted Installation

## Prerequisites
Secrets needs to manually created as "templates". The name has to match each secret respective `as-copy-of` annotation.
```
oc process -f openshift/sso73-x509-postgresql-secrets.yaml -p 'NAME=template.sso' -p 'SUFFIX=' -l part-of=rh-sso,managed-by=template,shared=true  | oc create -f -
oc process -f openshift/sso73-x509-secrets.yaml -p 'NAME=template.sso' -p 'SUFFIX=' -l part-of=rh-sso,managed-by=template,shared=true  | oc create -f -

#if you need to remove all, or re-create/update
oc delete secret -l part-of=rh-sso,shared=true

```
## Building
```
.jenkins/pipeline-cli build --config=openshift/config.groovy --pr=9
```
note: replace '9' with a valid pull-request number

## Deploying
```
.jenkins/pipeline-cli deploy --config=openshift/config.groovy --pr=9 --env=dev
```
note: replace '9' with a valid pull-request number

## Cleanup
```
#switch to the right project/namespace
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
oc process -f openshift/sso73-x509-postgresql-secrets.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=postgresql,component=database,part-of=rh-sso,managed-by=template  | oc apply -f -

oc process -f openshift/sso73-x509-postgresql.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=postgresql,component=database,part-of=rh-sso,managed-by=template | oc apply -f -
```

3. Import Image
The template requires an ImageStream in the same namespace
```
oc import-image rh-sso:1.3-7 --from=registry.access.redhat.com/redhat-sso-7/sso73-openshift:1.3-7
```

4. Create Keycloak/RH-SSO
```
oc process -f openshift/sso73-x509-secrets.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template  | oc apply -f -

oc process -f openshift/sso73-x509.yaml -p NAME=rh-sso -p SUFFIX=-dev -p VERSION=1.3-7 -l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template | oc apply -f -
```

5. Delete everything
```
oc delete rc,svc,dc,route,pvc,secret -l app=rh-sso-sandbox
```

# Reference:

https://access.redhat.com/documentation/en-us/red_hat_jboss_middleware_for_openshift/3/html-single/red_hat_jboss_sso_for_openshift/#Example-Deploying-SSO

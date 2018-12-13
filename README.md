# Scripted Installation

## Prerequisites
```
oc process -f openshift/sso72-x509-postgresql-secrets.yaml -p 'NAME=template.sso' -p 'SUFFIX=' -l part-of=rh-sso,managed-by=template,shared=true  | oc create -f -
oc process -f openshift/sso72-x509-secrets.yaml -p 'NAME=template.sso' -p 'SUFFIX=' -l part-of=rh-sso,managed-by=template,shared=true  | oc create -f -

#if you need to remove all, or re-create/update
oc delete secret -l part-of=rh-sso,shared=true

```
# Manual Installation

1. Switch to project
```
oc project devops-sso-sandbox
```

2. Create PostgreSQL
```
oc process -f openshift/sso72-x509-postgresql-secrets.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=postgresql,component=database,part-of=rh-sso,managed-by=template  | oc apply -f -

oc process -f openshift/sso72-x509-postgresql.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=postgresql,component=database,part-of=rh-sso,managed-by=template | oc apply -f -
```
3. Create Keycloak/RH-SSO
```
oc process -f openshift/sso72-x509-secrets.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template  | oc apply -f -

oc process -f openshift/sso72-x509.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template | oc apply -f -
```
4 Delete everything
```
oc delete rc,svc,dc,route,pvc,secret -l app=rh-sso-sandbox
```

# Reference:

https://access.redhat.com/documentation/en-us/red_hat_jboss_middleware_for_openshift/3/html-single/red_hat_jboss_sso_for_openshift/#Example-Deploying-SSO

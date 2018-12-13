# Scripted Installation

## Prerequisites
```
oc process -f openshift/sso72-x509-postgresql-secrets.yaml -p 'NAME=template.sso' -p 'SUFFIX=' -l part-of=rh-sso,managed-by=template,shared=true  | oc apply -f -
oc process -f openshift/sso72-x509-secrets.yaml -p 'NAME=template.sso' -p 'SUFFIX=' -l part-of=rh-sso,managed-by=template,shared=true  | oc apply -f -

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
3. Create Keycloak/SSO
```
oc process -f openshift/sso72-x509-secrets.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template  | oc apply -f -

oc process -f openshift/sso72-x509.yaml -p NAME=rh-sso -p SUFFIX=-dev -l app=rh-sso-sandbox,name=keycloak,component=keycloak,part-of=rh-sso,managed-by=template | oc apply -f -
```
4 Delete everything
```
oc delete rc,svc,dc,route,pvc,secret -l app=rh-sso-sandbox
```

# Notes
Original template extracted from `sso72-x509-postgresql-persistent`
```
oc -n openshift get template/sso72-x509-postgresql-persistent -o yaml > openshift/sso72-x509-postgresql-persistent.yaml
```

# Reference:

https://access.redhat.com/documentation/en-us/red_hat_jboss_middleware_for_openshift/3/html-single/red_hat_jboss_sso_for_openshift/#Example-Deploying-SSO

# sso

set "PATH=D:\Applications\Java\jdk1.8.0_144\bin;%PATH%"


## Preparing prerequisites
```
oc create serviceaccount sso-service-account
oc secret new sso-app-secret keystore.jks=https.jks jgroups.jceks=jgroups.jcek -o json > sso-app-secret.json
oc create -f sso-app-secret.json -n devops-sso-sandbox
oc secrets add serviceaccount/sso-service-account secret/sso-app-secret
oc policy add-role-to-user view system:serviceaccount:devops-sso-sandbox:sso-service-account
```

## Processing the template
```
#oc get templates -n openshift
#oc process --parameters -n openshift sso71-postgresql
oc process --param-file=template.env openshift//sso71-postgresql -o json > app.json
```

## Preparing template
```
linux
jq 'del(.items[] | select((.kind == "Service" and .metadata.name == "sso") or (.kind == "Route" and .spec.to.name == "sso")))'
```
```
windows
jq "del(.items[] | select((.kind == """Service""" and .metadata.name == """sso""") or (.kind == """Route""" and .spec.to.name == """sso""")))" app.json > app.final.json
```

## Applying template
```
oc create -f app.final.json -n devops-sso-sandbox
```

## Removing all objects
```
oc delete all -l application=sso -n devops-sso-sandbox
oc delete pvc sso-postgresql-claim -n devops-sso-sandbox
oc delete secret sso-app-secret

oc get all -l application=sso -n devops-sso-sandbox

```

# Reference:
https://access.redhat.com/documentation/en-us/red_hat_jboss_middleware_for_openshift/3/html-single/red_hat_jboss_sso_for_openshift/#Example-Deploying-SSO

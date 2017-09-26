# sso

set "PATH=D:\Applications\Java\jdk1.8.0_144\bin;%PATH%"


## Preparing prerequisites
```
oc create serviceaccount sso-service-account
oc secret new sso-app-secret keystore.jks=https.jks jgroups.jceks=jgroups.jcek keystore.password=keystore.password jgroups.password=jgroups.password -o json > sso-app-secret.json
oc create -f sso-app-secret.json -n devops-sso-sandbox
oc secrets add serviceaccount/sso-service-account secret/sso-app-secret
oc policy add-role-to-user view system:serviceaccount:devops-sso-sandbox:sso-service-account
```

## Processing the template
```
#oc get templates -n openshift
#oc process --parameters -n openshift sso71-postgresql-persistent
oc process --param-file=template.env openshift//sso71-postgresql-persistent -o json > app.template.json
```

## Preparing template
```
linux
jq 'del(.items[] | select((.kind == "Service" and .metadata.name == "sso") or (.kind == "Route" and .spec.to.name == "sso")))'
jq '(.items[] | select((.kind == "DeploymentConfig" and .metadata.name == "sso")) | .spec.template.spec.containers[] | select(.image="sso") | .env[] | select(.name=="HTTPS_PASSWORD")) |= {name:"HTTPS_PASSWORD", valueFrom:{secretKeyRef:{name:"sso-app-secret", value:"keystore.password"}}}'
jq '(.items[] | select((.kind == "DeploymentConfig" and .metadata.name == "sso")) | .spec.template.spec.containers[] | select(.image="sso") | .env[] | select(.name=="JGROUPS_ENCRYPT_PASSWORD")) |= {name:"JGROUPS_ENCRYPT_PASSWORD", valueFrom:{secretKeyRef:{name:"sso-app-secret", value:"jgroups.password"}}}'

del(.items[] | select((.kind == "DeploymentConfig" and .metadata.name == "sso")) | .spec.template.spec.containers[] | select(.image="sso") | .env[] | select(.name=="HTTPS_PASSWORD" or .name=="JGROUPS_ENCRYPT_PASSWORD") | .value)



.items[] | select((.kind == "DeploymentConfig" and .metadata.name == "sso")) | .spec.template.spec.containers[0].env[] | select(.name=="HTTPS_PASSWORD")
.items[] | select((.kind == "DeploymentConfig" and .metadata.name == "sso")) | .spec.template.spec.containers[0].env[] | select(.name=="JGROUPS_ENCRYPT_PASSWORD")

```
```
windows
jq "del(.items[] | select((.kind == """Service""" and .metadata.name == """sso""") or (.kind == """Route""" and .spec.to.name == """sso""")))" app.template.json > app.0.out.json
jq "(.items[] | select((.kind == """DeploymentConfig""" and .metadata.name == """sso""")) | .spec.template.spec.containers[] | select(.image="""sso""") | .env[] | select(.name=="""HTTPS_PASSWORD""")) |= {name:"""HTTPS_PASSWORD""", valueFrom:{secretKeyRef:{name:"""sso-app-secret""", value:"""keystore.password"""}}}"  app.0.json > app.1.out.json
jq "(.items[] | select((.kind == """DeploymentConfig""" and .metadata.name == """sso""")) | .spec.template.spec.containers[] | select(.image="""sso""") | .env[] | select(.name=="""JGROUPS_ENCRYPT_PASSWORD""")) |= {name:"""JGROUPS_ENCRYPT_PASSWORD""", valueFrom:{secretKeyRef:{name:"""sso-app-secret""", value:"""jgroups.password"""}}}"  app.1.out.json > app.2.out.json

```

## Applying template
```
oc create -f app.template.json -n devops-sso-sandbox
```

## Removing all objects
```
oc delete all -l application=sso -n devops-sso-sandbox
oc delete pvc sso-postgresql-claim -n devops-sso-sandbox
oc delete secret sso-app-secret -n devops-sso-sandbox

oc get all -l application=sso -n devops-sso-sandbox

```

# Reference:
https://access.redhat.com/documentation/en-us/red_hat_jboss_middleware_for_openshift/3/html-single/red_hat_jboss_sso_for_openshift/#Example-Deploying-SSO

# How the templates were created?

The templates where created using `sso73-x509-postgresql-persistent` as reference.

1. Obtain template
```
oc create -f https://raw.githubusercontent.com/jboss-container-images/redhat-sso-7-openshift-image/sso73-dev/templates/sso73-x509-postgresql-persistent.json --dry-run=true -o json > sso73-x509-postgresql-persistent.json

oc create -f sso73-x509-postgresql-persistent.json --dry-run=true -o yaml > sso73-x509-postgresql-persistent.yaml
```

2. Split the template in two:
    * `sso73-x509-postgresql.json`: only the database (postgresql) objects
    ```
    #reference filter script
    jq '.objects[] | select(.metadata.name | ( endswith("-postgresql") or endswith("-postgresql-claim")))' sso73-x509-postgresql-persistent.json
    ```

    * `sso73-x509.json`: all the other objects related to keycloak/rh-sso itself which are not in `sso73-x509-postgresql.json`
    ```
    #reference filter script
    jq '.objects[] | select(.metadata.name | ( endswith("-postgresql") or endswith("-postgresql-claim")) | not)' sso73-x509-postgresql-persistent.json
    ```
3. Manually create `sso73-x509-secrets.json` and `sso73-x509-postgresql-secrets.json` containing their respectives secrets. Be sure to add appropriate `as-copy-of` annotations

4. Manualy edit `sso73-x509.yaml` and `sso73-x509-postgresql.yaml` to use its respective `Secret` object

5. Convert to yaml (Optional). YAML was choosen for the single reason that it supports comments.
```
oc create -f sso73-x509-postgresql.json --dry-run=true -o yaml > sso73-x509-postgresql.yaml
oc create -f sso73-x509-postgresql-secrets.json --dry-run=true -o yaml > sso73-x509-postgresql-secrets.yaml

oc create -f sso73-x509.json --dry-run=true -o yaml > sso73-x509.yaml
oc create -f sso73-x509-secrets.json --dry-run=true -o yaml > sso73-x509-secrets.yaml
```
## Project setup
```
printf "tools\ndev\ntest\nprod" | xargs -I {} oc new-project 'devops-sso-{}' > /dev/null

printf "dev\ntest\nprod" | xargs -I {} oc policy add-role-to-group system:image-puller 'system:serviceaccounts:devops-sso-{}' -n devops-sso-tools --rolebinding-name='cross-project-image-pull'

printf "dev\ntest\nprod" | xargs -I {} oc policy add-role-to-user system:image-puller 'system:serviceaccount:devops-sso-{}:default' -n devops-sso-tools --rolebinding-name='cross-project-image-pull'

printf "dev\ntest\nprod" | xargs -I {} oc policy add-role-to-user system:image-puller 'system:serviceaccount:devops-sso-{}:builder' -n devops-sso-tools --rolebinding-name='cross-project-image-pull'

```

# Source Templates
- https://github.com/jboss-container-images/redhat-sso-7-openshift-image/blob/sso73-dev/templates/sso73-x509-postgresql-persistent.json
- https://github.com/BCDevOps/platform-services/blob/master/apps/pgsql/patroni/openshift-example/templates/template_patroni_persistent.yml


# References
- https://github.com/jboss-openshift/cct_module/blob/master/jboss/container/maven/s2i/bash/artifacts/usr/local/s2i/assemble
- https://github.com/jboss-openshift/cct_module/blob/master/jboss/container/maven/s2i/bash/artifacts/opt/jboss/container/maven/s2i/maven-s2i
- https://github.com/jboss-openshift/cct_module/blob/master/jboss/container/s2i/core/bash/artifacts/opt/jboss/container/s2i/core/s2i-core

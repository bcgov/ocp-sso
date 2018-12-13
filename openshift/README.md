# How the templates were created?

The templates where created using `sso72-x509-postgresql-persistent` as reference.

1. Obtain template
```
oc create -f https://raw.githubusercontent.com/jboss-container-images/redhat-sso-7-openshift-image/sso72-dev/templates/sso72-x509-postgresql-persistent.json --dry-run=true -o json > sso72-x509-postgresql-persistent.json

oc create -f sso72-x509-postgresql-persistent.json --dry-run=true -o yaml > sso72-x509-postgresql-persistent.yaml
```

2. Split the template in two: app/keycloak and database/postgresql
    * `sso72-x509-postgresql.json`: only the database (postgresql) objects
    ```
    #reference filter script
    jq '.objects[] | select(.metadata.name | ( endswith("-postgresql") or endswith("-postgresql-claim")))' sso72-x509-postgresql-persistent.json
    ```

    * `sso72-x509.json`: all the other objects related to keycloak/rh-sso itself which are not in `sso72-x509-postgresql.json`
    ```
    #reference filter script
    jq '.objects[] | select(.metadata.name | ( endswith("-postgresql") or endswith("-postgresql-claim")) | not)' sso72-x509-postgresql-persistent.json
    ```
3. Manually create `sso72-x509-secrets.json` and `sso72-x509-postgresql-secrets.json` containing their respectives secrets. Be sure to add appropriate `as-copy-of` annotations

4. Manualy edit `sso72-x509.yaml` and `sso72-x509-postgresql.yaml` to use its respective `Secret` object

5. Convert to yaml (Optional). YAML was choosen for the single reason that it supports comments.
```
oc create -f sso72-x509-postgresql.json --dry-run=true -o yaml > sso72-x509-postgresql.yaml
oc create -f sso72-x509-postgresql-secrets.json --dry-run=true -o yaml > sso72-x509-postgresql-secrets.yaml

oc create -f sso72-x509.json --dry-run=true -o yaml > sso72-x509.yaml
oc create -f sso72-x509-secrets.json --dry-run=true -o yaml > sso72-x509-secrets.yaml
```
## K6 Load Tests

This is a sample set up for how to run the k6 functional tests against an sso service. 

## Running Locally

Running Locally is as easy as building the docker container `docker build -t sso-k6:latest .`
and then running `docker run  -e SSO_BASE_URL=<sso_base_url> -e ... sso-k6:latest` (order matters!)

### Environment Variables

- `LOG_OUTPUT_PATH`: the path to where json output files will be written to (defaults to /tmp)
- `SSO_BASE_URL`: the SSO base url
- `SSO_REALM`: the SSO realm testing against
- `SSO_CLIENT`: the SSO client testing against
- `USER_PASSWORD`: the test user password
- `SSO_SA_CLIENT_ID`: the Service account client ID
- `SSO_SA_CLIENT_PASSWORD`: the Service account client password


### Configuration

You can modify `config/index.json` to suite your needs. See the [k6 config documentation for options](https://k6.io/docs/using-k6/options)

## Running on OpenShift
```shell
# build mage:
oc -n <tools_namespace> process -f bc.yaml | oc apply -f -

# deploy job:
oc -n <job_namespace> process -f job.yaml \
-p SSO_BASE_URL=<sso_base_url> -p SSO_REALM=<realm> \
-p SSO_CLIENT=<client> -p USER_PASSWORD=<password> \
-p SSO_SA_CLIENT_ID=<c_id> -p SSO_SA_CLIENT_PASSWORD=<c_psw> | oc -n <job_namespace> apply -f -

# delete job:
oc get all,configmap,secret,pvc -l group=sso-k6
oc delete all,configmap,secret,pvc -l group=sso-k6
```

## K6 Load Tests

This is a sample set up for how to run the k6 functional tests against an sso service.

## Prerequisites
This test suits assume that you have a SSO KeyCloak instance setup with the following components
- **default master realm**: it manages all resources
- **k6 realm**: a application realm for testing
- **k6 client**: a public client to test user login
- **api-test client**: a service account client to test API requests


## Running the Test Cases

### Environment Variables
All of the following env vars are required.

- `LOG_OUTPUT_PATH`: string of the path to where json output files will be written to (defaults to /tmp)
- `SSO_BASE_URL`: string of the SSO base url
- `SSO_REALM`: string of the SSO realm testing against
- `SSO_CLIENT`: string of the SSO client testing against
- `USER_PASSWORD`: string of the test user password
- `SSO_SA_CLIENT_ID`: string of the Service account client ID
- `SSO_SA_CLIENT_PASSWORD`: string of the Service account client password


### Configuration
You can modify `config/index.json` to suite your needs. See the [k6 config documentation for options](https://k6.io/docs/using-k6/options)


### Running Locally
Running Locally is as easy as building the docker container `docker build -t sso-k6:latest .`
and then running `docker run  -e SSO_BASE_URL=<sso_base_url> -e ... sso-k6:latest` (order matters!)


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

## Process Results
> this is a temporary solution until we find a way to import the json results to prometheus for processing

- take the results from the k6 test and and point the process_results shell script to it.
`JSON_FILE_PATH=path/to/file ./process_results.sh


## Todo
- automate creation of the prerequisite components, ansible playbook or here in the test run
- create more users for token test


## How to make use of these K6 tests
The K6 test cases simulates user behavior and API usage. By running the test cases *during an operational task* helps us to understand what are the expected events when we introduce the same task to production SSO instances.

### Operational Tasks:
There are two types of major operational tasks that we do commonly.

***DB changes***
- DB backup and restore
- DB template/config update that require pod restarts
- DB master pod failover and issue shutdown

***SSO app changes***
- deployment strategy change
- resource limit/request change


### How to run:
0. Spin up a sandbox SSO instance to test against

1. Simulate production DB: First of all, we will need to take a DB backup from production SSO instance to simulate the DB load. As a prerequisite, we assume the production instances have K6 required components setup already (see [readme](./README.md) for details). Then restore the DB and verify working.

2. take an estimation of time needed for operational task, update [K6 config](./config/index.json) to cover the period with proper VU number.

3. kick off the test cases without app changes to set baseline for test result

4. then start the operational task during a another test run

4. check if test cases fail, or significant service slowness compared with the baseline

5. tweak settings and rerun

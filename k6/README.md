## K6 Load Tests

This is a sample set up for how to run the k6 functional tests against an sso service. 

## Running Locally

Running Locally is as easy as building the docker container `docker built -t sso-k6:latest .`
and then running `docker run sso-k6:latest -e SSO_BASE_URL=<url>`

### Environment Variables

- `LOG_OUTPUT_PATH`: the path to where json output files will be written to (defaults to /tmp)
- `SSO_ENV`: the environment of the SSO service testing on
- `SSO_REALM`: the SSO realm testing against
- `SSO_CLIENT`: the SSO client testing against
- `USER_PASSWORD`: the test user password


### Configuration

You can modify `config/index.json` to suite your needs. See the [k6 config documentation for options](https://k6.io/docs/using-k6/options)

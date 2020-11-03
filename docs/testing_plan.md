# SSO Testing Plan

The following document describes the implementation of Functional/Smoke testing against the Redhat SSO Service. The implementation of these test is extremely important. The tests will provide the team who supports Redhat SSO better insight into: how the application behaves during live operational changes, more information on how end users maybe affected, a sanity check that the SSO Service is running well, and a mechanism to detect issues early/often so that team who supports Redhat SSO can notify the community quickly.


## Background

The Redhat SSO Service functions as a broker between multiple Identity Providers. Each of these Identity Providers can be considered a 3rd party service with their own support mechanisms and teams. The Testing Plan will test up to the point of integration with the service as a smoke test and no further. If any issues to be found are on the IDP side, the team supporting Redhat SSO will be able to identify it, escalate it (in case it hasn't been reported yet), and notify the community.


### What is being tested?

The tests can be seperated into two broad categories:

1. Keycloak API functionality under load
2. End User Workflow functionality (via browser session)

## Keycloak API Functionality Testing 

The tech that is being used is __[K6](https://k6.io)__. This testing framework provides an excellent api to declare API Tests. Make assertion against them as well as to run test cases across multiple sessions (called virtual users). For example, we could run tests to emulate the amount of traffic the Redhat SSO receives, historically, in a day. 

### Infrastructure

The K6 tests can be run as an Openshift Job so that we can start and stop the process arbitraily. In addition we may choose to run it as a CronJob later on.

### Initial Plan

Pick a simple target for amount of users to run the test as and ramp up to it. 

Run cases against the ramped up user count to simulate normal operation of the keycloak service. 

For example:

1. Test Keycloak API Client Creation
2. Ramp test from 1 virtual user to 100 over 10 seconds
3. Assert what a succesful response looks like

#### Refine

After running these tests and getting enough information out of them, we should make an effort to continually refine and improve these tests to better reflect the Redhat SSO Production Service


## Keycloak End User Functionality Testing

The tech being used is __[Cypress](https://cypress.io)__. Cypress is a non selenium based functional testing framework. It is very easy to containerize and authoring tests is simple and well documented. 

### Initial Plan

It is very apparent that sometimes our configuration changes may have a negative impact on our integrations with 3rd party services. The hope with these tests is to assert that end user flows are still functional up to these points of integration. 

For Example we could ensure that common flows for end users work well under a well configured client and realm. 

For Example:

1. Idir auth flow works
2. users can refresh tokens
3. users remain logged into clients that are apart of the same realm
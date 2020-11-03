# SSO Testing Plan

The following document describes the implementation of Functional/Smoke testing against the Redhat SSO Service. The implementation of these test is extremely important. The tests will provide the team who supports Redhat SSO better insight into: how the application behaves during live operational changes, more information on how end users maybe affected, a sanity check that the SSO Service is running well, and a mechanism to detect issues early/often so that team who supports Redhat SSO can notify the community quickly.


## Background

The Redhat SSO Service functions as a broker between multiple Identity Providers. Each of these Identity Providers can be considered a 3rd party service with their own support mechanisms and teams. The Testing Plan will test up to the point of integration with the service as a smoke test and no further. If any issues to be found are on the IDP side, the team supporting Redhat SSO will be able to identify it, escalate it (in case it hasn't been reported yet), and notify the community.


### What is being tested?

The testing plan simply provides an indication that the Redhat sso service is operating correctly.


## Keycloak API Functionality Testing 

The tech that is being used is __[K6](https://k6.io)__. This testing framework provides an excellent api to declare API Tests. Make assertion against them as well as to run test cases across multiple sessions (called virtual users). For example, we could run tests to emulate the amount of traffic the Redhat SSO receives, historically, in a day. 

### Infrastructure

The K6 tests can be run as an Openshift Job so that we can start and stop the process arbitraily. In addition we may choose to run it as a CronJob later on.

### Initial Plan

The initial plan is to settle on a small set of test cases that can verify particular features of Keycloak are working as expected.

These cases are:

1. A user can load the homepage for sso
2. A user can create a client via the api
3. A user can login to sso (local authentication)
3. A user can refresh their authentication token (local authentication)

#### Refine

After running these tests and getting enough information out of them, we should make an effort to continually refine and improve these tests to better reflect the Redhat SSO Production Service


#### Log Surfacing and Analyzation

The logs will ouput to a well known place inside of a pod. These logs can then be picked up or pushed to other tools for further analysis.
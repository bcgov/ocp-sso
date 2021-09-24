## k6 Sysdig Exporter

This service reads json files outputed from k6 tests in a directory and turns them into
usable prometheus metrics. This in turn is exposed by a `/metrics` endpoint which sysdig will
pick up. 


## To Run Locally


## Running on Openshift

1. If you do not have a redhat [registry service account](https://access.redhat.com/terms-based-registry/), create one and then create a `docker-registry` secret with the name `redhat-registry-puller-secret`.

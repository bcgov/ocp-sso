#!/bin/bash
set -Eeu
#set -o pipefail

# Latest known commit id of the working template
PATRONI_SOURCE_REF=196246a17656fcf32a5bf0836a3059f4d56a2ebe

PATRONI_BASE_URL="https://raw.githubusercontent.com/BCDevOps/platform-services/${PATRONI_SOURCE_REF}/apps/pgsql/patroni"

cd "$( dirname "${BASH_SOURCE[0]}" )"

curl -sSk -o sso73-x509-postgresql-secrets.yaml "${PATRONI_BASE_URL}/openshift/deployment-prereq.yaml"
curl -sSk -o sso73-x509-postgresql.yaml "${PATRONI_BASE_URL}/openshift/deployment.yaml"

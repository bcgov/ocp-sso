## Create secrets
Use the provided `openshift/secrets.json` as follow:
```
oc -n bcgov-tools process -f 'openshift/secrets.json' -p 'GH_USERNAME=' -p 'GH_PASSWORD=' | oc  -n bcgov-tools create -f -
```

# Get Jenkins Base Image
```
curl https://raw.githubusercontent.com/BCDevOps/openshift-components/master/cicd/jenkins-basic/openshift/build.yaml | oc process -f - -p VERSION=prod | oc apply -f -
```

# Build
```
( cd "$(git rev-parse --show-toplevel)/.jenkins/.pipeline" && npm run build -- --pr=0 --dev-mode=true )
```
Where:
`--pr=0` is used to set the pull request number to build from.
`--dev-mode=true` is used to indicate that the build will actually take the files in the current working directory, as opposed to a fresh `git clone`

# Deploy to DEV
```
( cd "$(git rev-parse --show-toplevel)/.jenkins/.pipeline" && npm run deploy -- --pr=0 --env=dev --description="deployment description" )
```

# Deploy to PROD
```
( cd "$(git rev-parse --show-toplevel)/.jenkins/.pipeline" && npm run deploy -- --pr=0 --env=prod )
```

## Grant Admin access to Jenkins Service Account in each managed namespace
```
oc -n <namespace>-<env> policy add-role-to-user 'admin' 'system:serviceaccounts:<namespace>-tools:jenkins'
oc -n <namespace>-tools policy add-role-to-group 'system:image-puller' 'system:serviceaccounts:<namespace>-<env>'
```

## Create the Jenkins Configuration for your application job in Jenkins

- copy the folder .jenkins/docker/contrib/jenkins/configuration/jobs/_jenkins/ and name it with your app's name
- Update the configuration in `config.xml`
  - under the section `jenkins.branch.BranchSource`
    - id
    - repoOwner
    - repository
  - scriptPath

# Clean
The clean script can run against each persistent environment, starting from `build`.
```
( cd "$(git rev-parse --show-toplevel)/.jenkins/.pipeline" && npm run clean -- --pr=0 --env=build )
( cd "$(git rev-parse --show-toplevel)/.jenkins/.pipeline" && npm run clean -- --pr=0 --env=dev )
```

*Warning*: Do *NOT* run against `test` or `prod`. It will cause *PERMANENT* deletion of all objects including `PVC`! be warned!

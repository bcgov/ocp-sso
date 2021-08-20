'use strict';
const options = require('@bcgov/pipeline-cli').Util.parseArguments();
const changeId = options.pr; //aka pull-request
const version = '7.4';
const name = 'sso';
const sandboxNamespace = '3d5c3f-prod';

const phases = {
  build: {
    namespace: '3d5c3f-tools',
    name: `${name}`,
    phase: 'build',
    changeId: changeId,
    suffix: `-build-${changeId}`,
    instance: `${name}-build-${changeId}`,
    version: `${version}-${changeId}`,
    tag: `${version}-${changeId}`,
  },
  sbox: {
    namespace: '3d5c3f-test',
    name: `${name}`,
    phase: 'sbox',
    changeId: changeId,
    suffix: `-test`,
    instance: `${name}-test`,
    version: `${version}-${changeId}`,
    tag: `test-${version}`,
    host: `sso-test-3d5c3f-test.apps.silver.devops.gov.bc.ca`,
  },
  dev: {
    namespace: '6d70e7-dev',
    name: `${name}`,
    phase: 'dev',
    changeId: changeId,
    suffix: '-dev',
    instance: `${name}-dev`,
    version: `${version}-${changeId}`,
    tag: `dev-${version}`,
    host: 'sso-dev.apps.silver.devops.gov.bc.ca',
  },
  test: {
    namespace: '6d70e7-test',
    name: `${name}`,
    phase: 'test',
    changeId: changeId,
    suffix: '-test',
    instance: `${name}-test`,
    version: `${version}-${changeId}`,
    tag: `test-${version}`,
    host: 'sso-test.apps.silver.devops.gov.bc.ca',
  },
  prod: {
    namespace: '6d70e7-prod',
    name: `${name}`,
    phase: 'prod',
    changeId: changeId,
    suffix: '-prod',
    instance: `${name}-prod`,
    version: `${version}-${changeId}`,
    tag: `prod-${version}`,
    host: 'sso.apps.silver.devops.gov.bc.ca',
  },
};

process.on('unhandledRejection', (reason) => {
  console.log(reason);
  process.exit(1);
});

module.exports = exports = { phases, options };

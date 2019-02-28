'use strict';
const options= require('pipeline-cli').Util.parseArguments()
const changeId = options.pr //aka pull-request
const version = '1.1.0'
const name = 'sso'

const phases = {
  build: {namespace:'devops-sso-tools'  , name: `${name}`, phase: 'build', changeId:changeId, suffix: `-build-${changeId}`, instance: `${name}-build-${changeId}`, version:`${version}-${changeId}`, tag:`${version}-${changeId}`},
   sbox: {namespace:`devops-sso-sandbox`, name: `${name}`, phase: 'sbox' , changeId:changeId, suffix: `-sbox-${changeId}` , instance: `${name}-sbox-${changeId}` , version:`${version}-${changeId}`, tag:`sbox-${version}-${changeId}`},
    dev: {namespace:`devops-sso-dev`    , name: `${name}`, phase: 'dev'  , changeId:changeId, suffix: `-dev-${changeId}`  , instance: `${name}-dev-${changeId}`  , version:`${version}-${changeId}`, tag:`dev-${version}-${changeId}`,  host: 'sso-dev.pathfinder.gov.bc.ca'},
   test: {namespace:`devops-sso-test`   , name: `${name}`, phase: 'test' , changeId:changeId, suffix: `-test`             , instance: `${name}-test`             , version:`${version}-${changeId}`, tag:`test-${version}`,             host: 'sso-test.pathfinder.gov.bc.ca'},
   prod: {namespace:`devops-sso-prod`   , name: `${name}`, phase: 'prod' , changeId:changeId, suffix: ''                  , instance: `${name}-prod`             , version:`${version}-${changeId}`, tag:`prod-${version}`,             host: 'sso.pathfinder.gov.bc.ca'}
}

module.exports = exports = phases
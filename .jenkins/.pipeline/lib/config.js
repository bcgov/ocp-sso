'use strict';
const options= require('@bcgov/pipeline-cli').Util.parseArguments()
const changeId = options.pr //aka pull-request
const version = '1.0'
const name = 'jenkins'

const phases = {
  build: {namespace:'6d70e7-tools'  , name: `${name}`, phase: 'build', changeId:changeId, suffix: `-build-${changeId}`, instance: `${name}-build-${changeId}`, version:`${version}-${changeId}`, tag:`${version}-${changeId}`},
    dev: {namespace:`6d70e7-tools`  , name: `${name}`, phase: 'dev'  , changeId:changeId, suffix: `-dev-${changeId}`  , instance: `${name}-dev-${changeId}`  , version:`${version}-${changeId}`, tag:`${version}-${changeId}`},
   prod: {namespace:`6d70e7-tools`  , name: `${name}`, phase: 'prod' , changeId:changeId, suffix: ''                  , instance: `${name}-prod`             , version:`${version}-${changeId}`, tag:`${version}`}
}

module.exports = exports = phases
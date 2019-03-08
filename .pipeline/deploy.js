'use strict';
const options= require('pipeline-cli').Util.parseArguments()
const phases = require('./lib/config.js')
const deploy = require('./lib/deploy.js')

deploy({phases:phases, options:options})

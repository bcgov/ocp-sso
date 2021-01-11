'use strict';
const options= require('@bcgov/pipeline-cli').Util.parseArguments()
const phases = require('./lib/config.js')
const clean = require('./lib/clean.js')

clean({phases:phases, options:options})

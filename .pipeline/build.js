'use strict';
const settings = require('./lib/config.js')
const task = require('./lib/build.js')

task(Object.assign(settings, { phase: 'build'}))

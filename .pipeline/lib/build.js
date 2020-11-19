'use strict';
const {OpenShiftClientX} = require('pipeline-cli')
const path = require('path');

module.exports = (settings)=>{
  const phases = settings.phases
  const options = settings.options
  const oc=new OpenShiftClientX(Object.assign({'namespace':phases.build.namespace}, options));
  const phase='build'
  let objects = []
  const templatesLocalBaseUrl = oc.toFileUrl(path.resolve(__dirname, '../../openshift'))

  objects = objects.concat(oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso74-x509.build.yaml`, {
    'param':{
      'NAME': phases[phase].name,
      'SUFFIX': phases[phase].suffix,
      'VERSION': phases[phase].tag,
      'SOURCE_GIT_URL': oc.git.http_url,
      'SOURCE_GIT_REF': oc.git.ref
    }
  }))

  oc.applyRecommendedLabels(objects, phases[phase].name, phase, phases[phase].changeId, phases[phase].instance)
  oc.applyAndBuild(objects)
}
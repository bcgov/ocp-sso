'use strict';
const {OpenShiftClientX} = require('pipeline-cli')

module.exports = (settings)=>{
  const phases = settings.phases
  const options = settings.options
  const oc=new OpenShiftClientX({'namespace':phases.build.namespace});
  const target_phase=options.env

  //console.log(`target_phase=${target_phase}`)

  for (var k in phases){
    if (phases.hasOwnProperty(k) && k != 'prod') {
      const phase=phases[k]
      if (k == target_phase){
        let selector = `app-name=${phase.name},env-id=${phase.changeId},env-name!=prod,!shared,github-repo=${oc.git.repository},github-owner=${oc.git.owner}`

        let resources = oc.unwrapOpenShiftList(oc.serializableMap(oc.raw('get', ['bc,dc'], {selector:selector, namespace:phase.namespace, output:'json'}).stdout))
        resources.forEach((resource)=>{
          if (resource.kind == 'BuildConfig'){
            //
          }else if (resource.kind == 'DeploymentConfig'){
            //
          }
        })
        //console.log(`phase=${phase}`)
        oc.raw('delete', ['all'], {selector:selector, namespace:phase.namespace})
        oc.raw('delete', ['pvc,Secret,configmap,endpoints,RoleBinding,role,ServiceAccount,Endpoints'], {selector:selector, namespace:phase.namespace})
      }
    }
  }
}
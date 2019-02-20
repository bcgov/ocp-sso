'use strict';
const {OpenShiftClientX} = require('pipeline-cli')
const path = require('path');

module.exports = (settings)=>{
  const phases = settings.phases
  const options= settings.options
  const phase=options.env
  const changeId = phases[phase].changeId
  const oc=new OpenShiftClientX({'namespace':phases[phase].namespace});
  const templatesLocalBaseUrl =oc.toFileUrl(path.resolve(__dirname, '../../openshift'))
  var objects = []

  //Secrets for PGSQL/Patroni
  //First call will create/generate default values and a template
  oc.createIfMissing(oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso72-x509-postgresql-secrets.yaml`, {
    'param':{
      'NAME': `template.${phases[phase].name}-pgsql-patroni`,
      'SUFFIX': '',
      'APP_DB_USERNAME': 'rhsso',
      'APP_DB_NAME': 'rhsso'
    }
  }))

  //Second call will create the required object using their respective template (default ones generated above)
  objects = objects.concat(oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso72-x509-postgresql-secrets.yaml`, {
    'param':{
      'NAME': `${phases[phase].name}-pgsql`,
      'SUFFIX': phases[phase].suffix,
      'APP_DB_USERNAME': 'rhsso',
      'APP_DB_NAME': 'rhsso'
    }
  }))

  //Secrets for RHSSO
  //First call will create/generate default values and a template
  oc.createIfMissing(oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso72-x509-secrets.yaml`, {
    'param':{
      'NAME': `template.${phases[phase].name}`,
      'SUFFIX': ''
    }
  }))

  //Second call will create the required object using their respective template (default ones generated above)
  objects = objects.concat(oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso72-x509-secrets.yaml`, {
    'param':{
      'NAME': phases[phase].name,
      'SUFFIX': phases[phase].suffix
    }
  }))

  //Deployment objects for Patroni
  objects = objects.concat(oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso72-x509-postgresql.yaml`, {
    'param':{
      'NAME': `${phases[phase].name}-pgsql`,
      'SUFFIX': phases[phase].suffix,
      'INSTANCE': `${phases[phase].name}-pgsql${phases[phase].suffix}`,
      'IMAGE_STREAM_NAMESPACE': 'bcgov',
//      'OPENSHIFT_IMAGE_REGISTRY': '172.30.1.1:5000',
      'IMAGE_STREAM_TAG': 'patroni:v10-stable'
    }
  }))

  objects = objects.concat(oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso72-x509.yaml`, {
    'param':{
      'NAME': phases[phase].name,
      'SUFFIX': phases[phase].suffix,
      'VERSION': phases[phase].tag,
      'DB_SECRET_NAME':`${phases[phase].name}-pgsql${phases[phase].suffix}`,
      'DB_SECRET_DATABASE_KEY':'app-db-name',
      'DB_SECRET_USERNAME_KEY':'app-db-username',
      'DB_SECRET_PASSWORD_KEY':'app-db-password',
      'DB_SERVICE_HOST': `${phases[phase].name}-pgsql-master${phases[phase].suffix}`
    }
  }))

  oc.applyRecommendedLabels(objects, phases[phase].name, phase, `${changeId}`, phases[phase].instance)
  
  objects.forEach((item)=>{
    if (item.kind == 'StatefulSet' && item.metadata.labels["app.kubernetes.io/name"] === "patroni"){
      oc.copyRecommendedLabels(item.metadata.labels, item.spec.selector.matchLabels)
      oc.copyRecommendedLabels(item.metadata.labels, item.spec.template.metadata.labels)

      item.spec.template.spec.containers.forEach((container)=>{
        container.env.forEach((env)=>{
          if (env.name === "PATRONI_KUBERNETES_LABELS"){
            var labels = JSON.parse(env.value)
            oc.copyRecommendedLabels(item.metadata.labels, labels)
            env.value = JSON.stringify(labels)
          }
        })
      })
    } else if (item.kind == 'DeploymentConfig'){
      oc.copyRecommendedLabels(item.metadata.labels, item.spec.template.metadata.labels)
    }
  })

  
  oc.importImageStreams(objects, phases[phase].tag, phases.build.namespace, phases.build.tag)
  oc.applyAndDeploy(objects, phases[phase].instance)

}
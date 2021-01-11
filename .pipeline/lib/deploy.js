'use strict';
const { OpenShiftClientX } = require('@bcgov/pipeline-cli');
const path = require('path');

module.exports = (settings) => {
  const phases = settings.phases;
  const options = settings.options;
  const phase = options.env;
  const changeId = phases[phase].changeId;
  const oc = new OpenShiftClientX(Object.assign({ namespace: phases[phase].namespace }, options));
  const templatesLocalBaseUrl = oc.toFileUrl(path.resolve(__dirname, '../../openshift'));
  const objects = [];

  //Secrets for PGSQL/Patroni
  //First call will create/generate default values and a template
  oc.createIfMissing(
    oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso74-x509-postgresql-secrets.yaml`, {
      param: {
        NAME: `template.${phases[phase].name}-pgsql-patroni`,
        SUFFIX: '',
        APP_DB_USERNAME: 'rhsso',
        APP_DB_NAME: 'rhsso',
      },
    }),
  );

  //Second call will create the required object using their respective template (default ones generated above)
  objects.push(
    ...oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso74-x509-postgresql-secrets.yaml`, {
      param: {
        NAME: `${phases[phase].name}-pgsql`,
        SUFFIX: phases[phase].suffix,
        APP_DB_USERNAME: 'rhsso',
        APP_DB_NAME: 'rhsso',
      },
    }),
  );

  //Secrets for RHSSO
  //First call will create/generate default values and a template
  oc.createIfMissing(
    oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso74-x509-secrets.yaml`, {
      param: {
        NAME: `template.${phases[phase].name}`,
        SUFFIX: '',
      },
    }),
  );

  //Second call will create the required object using their respective template (default ones generated above)
  objects.push(
    ...oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso74-x509-secrets.yaml`, {
      param: {
        NAME: phases[phase].name,
        SUFFIX: phases[phase].suffix,
      },
    }),
  );

  //Configmap for RHSSO
  //First call will create/generate default values and a template
  oc.createIfMissing(
    oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso74-x509-configmap.yaml`, {
      param: {
        NAME: `template.${phases[phase].name}`,
        SUFFIX: '',
      },
    }),
  );

  //Second call will create the required object using their respective template (default ones generated above)
  objects.push(
    ...oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso74-x509-configmap.yaml`, {
      param: {
        NAME: phases[phase].name,
        SUFFIX: phases[phase].suffix,
      },
    }),
  );

  //Deployment objects for Patroni
  objects.push(
    ...oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso74-x509-postgresql.yaml`, {
      param: {
        NAME: `${phases[phase].name}-pgsql`,
        SUFFIX: phases[phase].suffix,
        INSTANCE: `${phases[phase].name}-pgsql${phases[phase].suffix}`,
        // OCP4-TODO: DB version update when migration is complete (the current one is build separately)
        IMAGE_REGISTRY: 'image-registry.openshift-image-registry.svc:5000',
        IMAGE_STREAM_NAMESPACE: '6d70e7-tools',
        IMAGE_STREAM_TAG: 'patroni:v10-latest',
        // OCP4-TODO: need extra nsp for patorni, there are aporeto logs currently ignored - https://github.com/BCDevOps/platform-services/pull/732
        STORAGE_CLASS: 'netapp-block-standard',
      },
    }),
  );

  objects.push(
    ...oc.processDeploymentTemplate(`${templatesLocalBaseUrl}/sso74-x509.yaml`, {
      param: {
        NAME: phases[phase].name,
        SUFFIX: phases[phase].suffix,
        VERSION: phases[phase].version,
        IMAGE_TAG: phases[phase].tag,
        DB_SECRET_NAME: `${phases[phase].name}-pgsql${phases[phase].suffix}`,
        DB_SECRET_DATABASE_KEY: 'app-db-name',
        DB_SECRET_USERNAME_KEY: 'app-db-username',
        DB_SECRET_PASSWORD_KEY: 'app-db-password',
        DB_SERVICE_HOST: `${phases[phase].name}-pgsql-master${phases[phase].suffix}`,
        HOST: phases[phase].host,
      },
    }),
  );

  oc.applyRecommendedLabels(
    objects,
    phases[phase].name,
    phase,
    `${changeId}`,
    phases[phase].instance,
  );

  // CUSTOM: Fine tune labels and configs:
  // const backup = [];
  // const upgraded = [];
  objects.forEach((item) => {
    if (
      item.kind == 'StatefulSet' &&
      item.metadata.labels['app.kubernetes.io/name'] === 'patroni'
    ) {
      // 1. Remove PR label from statefulset:
      delete item.metadata.labels['env-id'];
      oc.copyRecommendedLabels(item.metadata.labels, item.spec.template.metadata.labels);

      // 2. Fill in the env var with dynamic labels:
      // item.spec.template.spec.containers.forEach((container)=>{
      //   container.env.forEach((env)=>{
      //     if (env.name === "PATRONI_KUBERNETES_LABELS"){
      //       var labels = JSON.parse(env.value)
      //       oc.copyRecommendedLabels(item.metadata.labels, labels)
      //       env.value = JSON.stringify(labels)
      //     }
      //   })
      // })

      // 3. Remove useless labels from PVC templates:
      if (item.spec.volumeClaimTemplates) {
        item.spec.volumeClaimTemplates.forEach((pvc) => {
          pvc.metadata.labels = { statefulset: item.metadata.name };
        });
      }
    } else if (item.kind == 'DeploymentConfig') {
      oc.copyRecommendedLabels(item.metadata.labels, item.spec.template.metadata.labels);

      // 4. Update SSO deployment to recreate strategy:
      // const existing = oc.objectOrNull(Util.name(item), {'ignore-not-found':'true'})
      // if (existing != null &&
      //     item.metadata.labels["app.kubernetes.io/name"] === "rh-sso" &&
      //     item.metadata.labels["app.kubernetes.io/component"] === "server" &&
      //     existing.metadata.labels["app.kubernetes.io/version"] !== item.metadata.labels["app.kubernetes.io/version"]
      //     ){
      //   //backup.push(existing);
      //   upgraded.push(JSON.parse(JSON.stringify(item)));

      //   oc.raw('scale', [Util.name(item)], {'replicas':1, 'timeout': "5m"});
      //   item.spec.replicas = 1
      //   item.spec.strategy.type = 'Recreate'
      //   delete item.spec.strategy.rollingParams
      // }
    }
  });

  // 5. Debugging:
  // console.info('all the objects');
  // objects.forEach((i) => {
  //   if (i.kind === 'DeploymentConfig' || i.kind === 'StatefulSet') {
  //     console.dir(i, { depth: null });
  //   }
  // });

  oc.importImageStreams(objects, phases[phase].tag, phases.build.namespace, phases.build.tag);
  oc.applyAndDeploy(objects, phases[phase].instance);

  // 6. Update with the new deployment strategy:
  // oc.applyAndDeploy(objects, phases[phase].instance).then((result)=>{
  //   upgraded.forEach(item => {
  //     const patch = {spec: { replicas: item.spec.replicas, strategy:item.spec.strategy}}
  //     oc.raw('patch', Util.name(item), {patch: JSON.stringify(patch)});
  //   })
  // })
};

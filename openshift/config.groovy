app {
    name = "${opt.'name'?:'sso'}"
    namespaces { //can't call environments :(
        'build'{
            namespace = 'devops-sso-sandbox'
            disposable = true
        }
        'dev' {
            namespace = app.namespaces.build.namespace
            disposable = true
        }
        'prod' {
            namespace = app.namespaces.build.namespace
            disposable = false
        }
    }

    git {
        workDir = ['git', 'rev-parse', '--show-toplevel'].execute().text.trim()
        uri = ['git', 'config', '--get', 'remote.origin.url'].execute().text.trim()
        ref = "refs/pull/${opt.'pr'}/head"
        commit = ['git', 'rev-parse', 'HEAD'].execute().text.trim()
    }

    build {
        env {
            name = "build"
            id = "pr-${opt.'pr'}"
        }
        suffix = "-build-${opt.'pr'}"
        id = "${app.name}${app.build.suffix}"
        version = "${app.build.env.name}-v${opt.'pr'}"
        name = "${opt.'build-name'?:app.name}"

        namespace = app.namespaces.'build'.namespace
        timeoutInSeconds = 60*20 // 20 minutes
        templates = [
                [
                    'file':'openshift/sso72-x509.build.yaml',
                    'params':[
                        'NAME': "${app.build.name}",
                        'SUFFIX': app.build.suffix,
                        'VERSION': app.build.version,
                        'SOURCE_GIT_URL': "${app.git.uri}",
                        'SOURCE_GIT_REF': "${app.git.ref}"
                    ]
                ]
        ]
    }

    deployment {
        env {
            name = vars.deployment.env.name // env-name
            id = vars.deployment.env.id
        }
        suffix = "${vars.deployment.suffix}" // app (unique name across all deployments int he namespace)
        version = "${vars.deployment.version}" //app-version  and tag
        name = "${vars.deployment.name}"
        id = "${app.deployment.name}${app.deployment.suffix}" // app (unique name across all deployments int he namespace)

        namespace = "${vars.deployment.namespace}"
        timeoutInSeconds = 60*20 // 20 minutes
        host = "${app.deployment.id}-${app.deployment.namespace}.pathfinder.gov.bc.ca"

        templates = [
                [
                    'file':'openshift/sso72-x509-postgresql-secrets.yaml',
                    'params':[
                        'NAME': "${app.deployment.name}",
                        'SUFFIX': "${app.deployment.suffix}"
                    ]
                ],
                [
                    'file':'openshift/sso72-x509-postgresql.yaml',
                    'params':[
                        'NAME': "${app.deployment.name}",
                        'SUFFIX': "${app.deployment.suffix}"
                    ]
                ],
                [
                    'file':'openshift/sso72-x509-secrets.yaml',
                    'params':[
                        'NAME': "${app.deployment.name}",
                        'SUFFIX': "${app.deployment.suffix}"
                    ]
                ],
                [
                    'file':'openshift/sso72-x509.yaml',
                    'params':[
                        'NAME': "${app.deployment.name}",
                        'SUFFIX': "${app.deployment.suffix}",
                        'VERSION': "${app.deployment.version}"
                    ]
                ]
        ]
    }
}

environments {
    'dev' {
        vars {
            deployment {
                env {
                    name ="dev"
                    id = "pr-${opt.'pr'}"
                }
                suffix = "-dev-${opt.'pr'}"
                name = "${opt.'deployment-name'?:app.name}"
                namespace = app.namespaces[env.name].namespace
                version = "${vars.deployment.name}-${vars.deployment.env.name}-v${opt.'pr'}" //app-version  and tag
            }
        }
    }
    'test' {
        vars {
            deployment {
                env {
                    name ="test"
                    id = "pr-${opt.'pr'}"
                }
                suffix = '-test'
                name = "${opt.'deployment-name'?:app.name}"
                namespace = app.namespaces[env.name].namespace
                version = "${vars.deployment.name}-${vars.deployment.env.name}" //app-version  and tag
            }
        }
    }
    'prod' {
        vars {
            deployment {
                env {
                    name ="prod"
                    id = "pr-${opt.'pr'}"
                }
                suffix = ''
                id = "${app.name}${vars.deployment.suffix}"
                name = "${opt.'deployment-name'?:app.name}"
                namespace = app.namespaces[env.name].namespace
                version = "${vars.deployment.name}-${vars.deployment.env.name}" //app-version  and tag
            }
        }
    }
}
pipeline {
    agent none
    environment {
        COMPONENT_NAME = 'BCGov SSO KeyCloak app'
    }
    options {
        disableResume()
    }
    stages {
        stage('Build') {
            agent { label 'build' }
            steps {
                script {
                    // only continue build if changes are relevant to the BCGov SSO KeyCloak app
                    // TODO: restructure OCP folders
                    def filesInThisCommitAsString = sh(script:"git diff --name-only HEAD~1..HEAD | grep '^.pipeline/' || echo -n ''", returnStatus: false, returnStdout: true).trim()
                    def hasChangesInPath = (filesInThisCommitAsString.length() > 0)
                    echo "Changes including:"
                    echo "${filesInThisCommitAsString}"
                    if (!currentBuild.rawBuild.getCauses()[0].toString().contains('UserIdCause') && !hasChangesInPath){
                        currentBuild.rawBuild.delete()
                        error("No changes detected in the component path for $COMPONENT_NAME")
                    }
                }
                echo "Aborting all running jobs for $COMPONENT_NAME"
                script {
                    abortAllPreviousBuildInProgress(currentBuild)
                }
                echo "Building ..."
                sh "cd .pipeline && ./npmw build -- --pr=${CHANGE_ID}"
            }
        }
        stage('Deploy (SANDBOX)') {
            agent { label 'deploy' }
            steps {
                echo "Deploying ..."
                sh "cd .pipeline && ./npmw deploy -- --pr=${CHANGE_ID} --env=sbox"
            }
        }
        stage('Deploy (DEV)') {
            agent { label 'deploy' }
            when {
                expression {
                    return env.CHANGE_TARGET == 'master';
                }
                beforeInput true;
            }
            input {
                message "Should we continue with deployment to DEV?"
                ok "Yes!"
                submitter "authenticated"
            }
            steps {
                echo "Deploying ..."
                sh "cd .pipeline && ./npmw deploy -- --pr=${CHANGE_ID} --env=dev"
            }
        }
        stage('Deploy (TEST)') {
            agent { label 'deploy' }
            when {
                expression {
                    return env.CHANGE_TARGET == 'master';
                }
                beforeInput true;
            }
            input {
                message "Should we continue with deployment to TEST?"
                ok "Yes!"
                submitter "authenticated"
            }
            steps {
                echo "Deploying ..."
                sh "cd .pipeline && ./npmw deploy -- --pr=${CHANGE_ID} --env=test"
            }
        }
        stage('Deploy (PROD)') {
            agent { label 'deploy' }
            when {
                expression {
                    return env.CHANGE_TARGET == 'master';
                }
                beforeInput true;
            }
            input {
                message "Should we continue with deployment to PROD? Have you notified the community?"
                ok "Yes!"
                submitter "authenticated"
            }
            steps {
                echo "Deploying ..."
                sh "cd .pipeline && ./npmw deploy -- --pr=${CHANGE_ID} --env=prod"
            }
        }
    }
}
pipeline {
    agent none
    options {
        disableResume()
    }
    stages {
        stage('Build') {
            agent { label 'build' }
            steps {
                echo "Aborting all running jobs ..."
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
            input {
                message "Should we continue with deployment to DEV?"
                ok "Yes!"
            }
            steps {
                echo "Deploying ..."
                sh "cd .pipeline && ./npmw deploy -- --pr=${CHANGE_ID} --env=dev"
            }
        }
    }
}
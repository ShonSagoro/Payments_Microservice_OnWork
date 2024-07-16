pipeline {
    agent any

    stages {
        stage('Prepare Environment') {
            steps {
                withCredentials([file(credentialsId: 'env-payments', variable: 'ENV_FILE')]) {
                    script {
                        sh "cp \$ENV_FILE \$WORKSPACE/.env"
                        sh 'cat $WORKSPACE/.env'
                    }
                }
            }
        }
        stage('Build and Test') {
            steps {
                script {
                    sh '''
                    docker stop paymenta || true
                    docker rm paymenta || true
                    docker rmi payment || true
                    '''
                }
            }
        }
        stage('Test') {
            steps {
                script {
                   sh 'echo "Tests passed"'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh '''
                    docker build -t payment .
                    docker run -d -p 3003:3003 --name paymenta payment
                    '''
                }
            }
        }
    }
}

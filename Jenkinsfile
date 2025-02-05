pipeline {
    agent any
    environment {
        HEROKU_APP_NAME = 'sit753-hd' // Must match the Heroku app name
    }
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t sit753-hd .'
                    sh "docker tag sit753-hd registry.heroku.com/${HEROKU_APP_NAME}/web"
                }
            }
        }
        stage('Push To Heroku') {
            steps {
                withCredentials([usernamePassword(credentialsId:'heroku-credential',usernameVariable:'USR',passwordVariable:'PWD')]) {
                    sh """
                    docker login registry.heroku.com -u ${env.USR} -p ${env.PWD}
                    docker push registry.heroku.com/${HEROKU_APP_NAME}/web
                    """
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'docker run --rm sit753-hd npm test'
                }
            }
        }
        stage('Code Quality Check') {
            steps {
                script {
                    sh 'docker run --rm sit753-hd npm run lint'
                }
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([usernamePassword(credentialsId:'heroku-credential',usernameVariable:'USR',passwordVariable:'PWD')]) {
                    script {
                        sh """
                        cat <<EOF > ~/.netrc
                        machine api.heroku.com
                          login ${env.USR}
                          password ${env.PWD}
                        machine git.heroku.com
                          login ${env.USR}
                          password ${env.PWD}
                        EOF
                        """
                        sh "heroku container:release web --app ${HEROKU_APP_NAME}"
                    }
                }
            }
        }
    }
}

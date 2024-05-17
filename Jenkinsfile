pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t sit753-hd .'
                    sh 'docker tag sit753-hd registry.heroku.com/sit753-hd/web'
                }
            }
        }
        stage('Push To Heroku') {
            steps {
                withCredentials([usernamePassword(credentialsId:'heroku-credential',usernameVariable:'USR',passwordVariable:'PWD')])
                    {
                        sh """
                        docker login registry.heroku.com -u ${env.USR} -p ${env.PWD}
                        docker push registry.heroku.com/sit753-hd/web
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
                withCredentials([usernamePassword(credentialsId:'heroku-credential',usernameVariable:'USR',passwordVariable:'PWD')])
                    {
                        sh """
                        docker login registry.heroku.com -u ${env.USR} -p ${env.PWD}
                        heroku container:release web --app sit753-hd
                        """
                    }
            }
        }
    }
}
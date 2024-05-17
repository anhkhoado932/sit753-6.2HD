pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t my-express-app .'
                    sh 'docker tag my-express-app registry.heroku.com/my-express-app/web'
                }
            }
        }
        stage('Push To Heroku') {
            steps {
                withCredentials([usernamePassword(credentialsId:'heroku-credential',usernameVariable:'USR',passwordVariable:'PWD')])
                    {
                        echo "Docker Logging In"  
                        sh "docker login registry.heroku.com -u ${env.USR} -p ${env.PWD}"
                    }
                echo 'Pushing to Heroku'
                sh 'docker push registry.heroku.com/my-express-app/web'
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'docker run --rm my-express-app npm test'
                }
            }
        }
        stage('Code Quality Check') {
            steps {
                echo 'code quality check'
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([usernamePassword(credentialsId:'heroku-credential',usernameVariable:'USR',passwordVariable:'PWD')])
                    {
                        echo "Docker Logging In"  
                        sh "docker login registry.heroku.com -u ${env.USR} -p ${env.PWD}"
                    }
                echo 'Deploying to Heroku'
                sh 'heroku container:release web --app my-express-app'

            }
        }
    }
}
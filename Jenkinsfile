pipeline {
    agent any
    stages {
        stage('build') {
            checkout scm
            script {
                docker.build("my-express-app")
            }
        }
        stage('test') {
            steps {
            }
            post {
                success {
                    emailext body: 'Test stage succeeded', 
                    subject: 'Test stage succeeded',
                    to: 'dakhoa0903@gmail.com'
                }
                failure {
                    emailext body: 'Test stage failed', 
                    subject: 'Test stage failed',
                    to: 'dakhoa0903@gmail.com',
                    attachLog: true
                }
            }

        }
        stage('code quality check') {
            steps {
            }
        }
        stage('security scan') {
            steps {
            }
            post {
                success {
                    emailext body: 'security scan succeeded', 
                    subject: 'security scan succeeded',
                    to: 'dakhoa0903@gmail.com'
                }
                failure {
                    emailext body: 'security scan failed', 
                    subject: 'security scan failed',
                    to: 'dakhoa0903@gmail.com',
                    attachLog: true
                }
            }
        }
        stage('deploy to staging') {
            steps {
            }
        }
        stage('integration test on staging') {
            steps {
            }
        }
        stage('deploy to production') {
            steps {
            }
        }
    }
}
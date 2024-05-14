pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                // checkout scm
                echo 'code quality check'

                script {
                    def myEnv = docker.build("my-express-app")
                }
            }
        }
        stage('test') {
            steps {
                script {
                    myEnv.inside(
                        sh "npm test"
                    )
                }
            }
            // post {
            //     failure {
            //         emailext body: 'Test stage failed', 
            //         subject: 'Test stage failed',
            //         to: 'dakhoa0903@gmail.com',
            //         attachLog: true
            //     }
            // }

        }
        stage('code quality check') {
            steps {
                echo 'code quality check'
            }
        }
        // stage('security scan') {
        //     steps {
        //     }
        //     post {
        //         success {
        //             emailext body: 'security scan succeeded', 
        //             subject: 'security scan succeeded',
        //             to: 'dakhoa0903@gmail.com'
        //         }
        //         failure {
        //             emailext body: 'security scan failed', 
        //             subject: 'security scan failed',
        //             to: 'dakhoa0903@gmail.com',
        //             attachLog: true
        //         }
        //     }
        // }
        // stage('deploy to staging') {
        //     steps {
        //     }
        // }
        // stage('integration test on staging') {
        //     steps {
        //     }
        // }
        // stage('deploy to production') {
        //     steps {
        //     }
        // }
    }
}
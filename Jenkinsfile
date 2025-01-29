pipeline {
    agent {
        docker {
            image 'node:18' // Gunakan image Node.js dengan shell Linux
        }
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', credentialsId: 'github-credentials', url: 'https://github.com/irfanfauzi170845/Chart_testing.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests - Create Cart') {
            steps {
                sh 'npm test __tests__/create-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }

        stage('Run Tests - Get Cart') {
            steps {
                sh 'npm test __tests__/get-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }

        stage('Run Tests - Add Item Cart') {
            steps {
                sh 'npm test __tests__/additem-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }

        stage('Run Tests - Update Cart') {
            steps {
                sh 'npm test __tests__/update-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }

        stage('Run Tests - Delete Item Cart') {
            steps {
                sh 'npm test __tests__/deleteitem-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }

        stage('Run Tests - Delete Cart') {
            steps {
                sh 'npm test __tests__/delete-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }

        stage('Publish Test Results') {
            steps {
                junit 'test-reports/jest/results.xml'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'test-reports/jest/**', allowEmptyArchive: true
        }
        success {
            echo 'Pipeline for CRUD Cart Testing succeeded!'
        }
        failure {
            echo 'Pipeline for CRUD Cart Testing failed.'
        }
    }
}

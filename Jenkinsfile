pipeline {
    agent {
        label 'cart-1' // Menentukan agen di mana pipeline dijalankan
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout kode dari GitHub
                git branch: 'main', credentialsId: 'github-credentials', url: 'https://github.com/irfanfauzi170845/Chart_testing.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Menginstal dependencies menggunakan npm di Windows
                bat 'npm install'
            }
        }

        stage('Run Tests - Create Cart') {
            steps {
                bat 'npm test __tests__/create-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }

        stage('Run Tests - Get Cart') {
            steps {
                bat 'npm test __tests__/get-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }

        stage('Run Tests - Add Item Cart') {
            steps {
                bat 'npm test __tests__/additem-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }

        stage('Run Tests - Update Cart') {
            steps {
                bat 'npm test __tests__/update-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }

        stage('Run Tests - Delete Item Cart') {
            steps {
                bat 'npm test __tests__/deleteitem-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }

        stage('Run Tests - Delete Cart') {
            steps {
                bat 'npm test __tests__/delete-cart --ci --reporters=default --reporters=jest-junit --passWithNoTests'
            }
        }
    }

    post {
        always {
            // Mengarsipkan hasil pengujian
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

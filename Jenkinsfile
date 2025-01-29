 
pipeline {
    agent {
        label 'cart-1'
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('git') {
            steps {
                git branch: 'main', url: 'https://github.com/irfanfauzi170845/Chart_testing.git'
            }
        }

        stage('Run Tests - Create Cart') {
            steps {
                // Menjalankan pengujian untuk CREATE Cart
                sh 'npx jest --testPathPattern=__tests__/create-chart --ci --reporters=default --reporters=jest-junit'
            }
        }

        stage('Run Tests -  Get Cart') {
            steps {
                // Menjalankan pengujian untuk GET Cart
                sh 'npx jest --testPathPattern=__tests__/get-cart --ci --reporters=default --reporters=jest-junit'
            }
        }
        stage('Run Tests - Add Item Cart') {
            steps {
                // Menjalankan pengujian untuk ADD ITEM Cart
                sh 'npx jest --testPathPattern=__tests__/additem-chart --ci --reporters=default --reporters=jest-junit'
            }
        }

        stage('Run Tests - Update Cart') {
            steps {
                // Menjalankan pengujian untuk UPDATE Cart
                sh 'npx jest --testPathPattern=__tests__/update-chart --ci --reporters=default --reporters=jest-junit'
            }
        }
        stage('Run Tests - Delete Item Cart') {
            steps {
                // Menjalankan pengujian untuk DELETE ITEM Cart
                sh 'npx jest --testPathPattern=__tests__/deleteitem-chart --ci --reporters=default --reporters=jest-junit'
            }
        }

        stage('Run Tests - Delete Cart') {
            steps {
                // Menjalankan pengujian untuk DELETE Cart
                sh 'npx jest --testPathPattern=__tests__/delete-chart --ci --reporters=default --reporters=jest-junit'
            }
        }

        stage('Publish Test Results') {
            steps {
                // Memublikasikan hasil pengujian Jest dalam format JUnit
                junit 'reports/jest-junit-report.xml'
            }
        }
    }

    post {
        always {
            // Arsipkan semua laporan hasil pengujian
            archiveArtifacts artifacts: 'reports/**', allowEmptyArchive: true
        }
        success {
            echo 'Pipeline for CRUD Cart Testing succeeded!'
        }
        failure {
            echo 'Pipeline for CRUD Cart Testing failed.'
        }
    }
}

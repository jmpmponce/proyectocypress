pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Cypress') {
            steps {
                bat 'npx cypress run --spec "cypress/e2e/1-getting-started/todo.cy.js"'
            }
        }
    }
}
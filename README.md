# 🧪 Cypress Practical Test - Amphora Selection Process

This project is submitted as part of the technical practical test for Amphora's selection process. It demonstrates my skills in UI and API test automation using Cypress with JavaScript, structured with BDD (Cucumber) and Page Object Model (POM) best practices.

---

## 📋 Test Requirements Overview

### ✅ Task 1 – UI Automation with Cypress

Website under test: [https://www.amphora.net](https://www.amphora.net)

- Navigate through all **Products** listed in the "Products" dropdown.
- Assert that the product page loads successfully by checking for the presence of the `<h1>` tag.
- Under the **Resources** dropdown, perform **Newsletter Signup**.
- Assert that a confirmation message is displayed:  
  `"Thank you for signing up for our newsletter"`

---

### ✅ Task 2 – API Automation with Cypress

API used: [Swagger Petstore](https://petstore.swagger.io/#/)

- Target: `/pet` endpoint
- Performed complete **CRUD** operations on a Pet resource:
  - ✅ **Create** a unique pet with POST
  - ✅ **Read** the created pet with GET
  - ✅ **Update** the pet with PUT
  - ✅ **Delete** the pet with DELETE
- Assertions are included after every step to validate response data and status codes

---

## 📁 Project Structure
cypress-practical-test/ ├── cypress/ │ ├── e2e/ │ │ ├── UI/ │ │ │ ├── features/ │ │ │ └── pages/ │ │ ├── api/ │ │ │ ├── features/ │ │ │ └── step_definitions/ │ │ └── step_definitions/ │ ├── support/ │ └── reports/ # Contains screenshots/videos and HTML reports ├── cypress.config.js ├── cypress-cucumber-preprocessor.config.js ├── package.json └── README.md

## 🚀 Getting Started

### 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vishaljoga/AmphoraTest.git
   cd AmphoraTest
Install dependencies:
npm install
🧪 Running the Tests
✅ UI Tests
npx cypress run --spec "cypress/e2e/UI/features/*.feature"
✅ API Tests
npx cypress run --spec "cypress/e2e/api/features/*.feature"
🖥️ Open Cypress Test Runner (Optional)
npx cypress open
📊 Reports & Debugging
HTML Report generated using mochawesome is located in:

cypress/reports/index.html
Failure Screenshots/Videos are captured automatically and stored under:

cypress/reports/screenshots/
🔐 Code Authenticity
All tests are authored by me and designed specifically for this test. No third-party code generation tools were used. Feedback is welcome.

🔗 Submission
✅ GitHub Repository Link:
https://github.com/Vishaljoga/AmphoraTest

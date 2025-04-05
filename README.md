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

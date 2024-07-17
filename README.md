# SauceDemo E2E Test Automation
## Overview
This project demonstrates an end-to-end (E2E) test automation solution for the [SauceDemo](https://saucedemo.com/) e-commerce website. The tests verify the process of adding a product to the cart and finalizing a purchase using Cypress and TypeScript. The implementation follows the Page Object Model (POM) design pattern for better code maintainability and readability.

## Project Structure
- **saucedemo-e2e/**: This is the root directory of the project.
    - **cypress/**: This directory likely contains Cypress specific configurations.
    - **e2e/task1**: This directory contains the E2E test specifications.
        - **e2e.spec.ts**: This file contains the actual E2E test cases written in TypeScript.
    - **page-objects/**: This directory holds Page Object Model (POM) files.
        - These files likely encapsulate interaction logic with specific pages of the application (LoginPage.ts, ProductPage.ts, CartPage.ts, CheckoutPage.ts).
    - **support/**: This directory might contain helper functions or configurations for the tests.
        - **e2e.ts**: This file could hold reusable functionalities used across E2E tests.
  - **cypress.config.ts**: This file probably holds Cypress configuration settings.
    - **package.json**: This file lists project dependencies and scripts.
    - **tsconfig.json**: This file configures the TypeScript compiler for the project.
    - **node_modules/**: This directory contains installed dependencies from npm (Node Package Manager).
 
## Getting Started
### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Git

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/saucedemo-e2e.git
   cd saucedemo-e2e

2. **Install dependencies**:
   ```bash
   npm install

### Running the Tests
1. **Open Cypress Test Runner**:
   ```bash
   npx cypress open
This command will open the Cypress Test Runner, where you can run the tests interactively.
   
2. **Run tests in headless mode**:
   ```bash
     npx cypress run --spec cypress/e2e/task1/e2e.spec.ts

This command will run the tests in headless mode and output the results in the terminal.

## Test Details
### The E2E test automates the following scenario:
1. Visit the SauceDemo website.
2. Log in with valid credentials.
3. Add a product to the cart.
4. Proceed to the cart and initiate the checkout process.
5. Fill in the required checkout information.
6. Complete the purchase.
7. Verify that the order completion message is displayed.

## Page Object Model (POM)

The project follows the Page Object Model design pattern, which promotes better test code organization and maintainability. Each page's interactions are encapsulated within its own class in the "page-objects" directory.
* **LoginPage.ts:** Handles interactions with the login page.
* **ProductPage.ts**: Manages actions on the product listing page.
* **CartPage.ts:** Contains methods for the cart page.
* **CheckoutPage.ts:** Manages the checkout process.


## Configuration
### TypeScript Configuration
The "tsconfig.json" file is set up to include TypeScript support and Cypress types, ensuring type checking and IntelliSense for a smoother development experience.

### Cypress Configuration
The "cypress.config.ts" file configures Cypress to use the support file and sets the base URL for the tests.

## Test Result
![image](https://github.com/user-attachments/assets/75071d7e-1d72-4120-98f9-dd4951013e00)





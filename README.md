# Playwright E2E Automation Framework using TypeScript (POM)

This project demonstrates an End-to-End automation framework built using **Playwright with TypeScript** and the **Page Object Model (POM)** design pattern.

## Tech Stack
- Playwright
- TypeScript
- Page Object Model (POM)
- Node.js

## Test Scenarios Automated
1. User Login
2. Add product to cart
3. Checkout process
4. Order confirmation validation

## Reporting & Debugging

The framework includes built-in Playwright debugging capabilities:

- Automatic screenshots on test failure
- Video recording for failed tests
- Trace viewer for debugging test runs
- HTML test reports

To open the report after running tests:

npx playwright show-report

## Project Structure
pages/
  loginPage.ts
  inventoryPage.ts
  cartPage.ts

tests/
  login.spec.ts
  addToCart.spec.ts
  checkout.spec.ts
  ## Application Used
SauceDemo (public demo application)

https://www.saucedemo.com/

## How to Run Tests
npx playwright test

## Run Tests

Install dependencies

npm install

Run tests

npx playwright test

Open HTML report

npx playwright show-report

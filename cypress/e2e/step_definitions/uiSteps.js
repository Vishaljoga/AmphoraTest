import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { ProductsPage } from '../UI/pages/ProductsPage';
import { ResourcesPage } from '../UI/pages/ResourcesPage';

const productsPage = new ProductsPage();
const resourcesPage = new ResourcesPage();

Given('I open the homepage', () => {
  cy.visit('https://www.amphora.net');
});

When('I click all product links from the Products dropdown', () => {
  productsPage.clickAllProducts();
});

Then('I should see product pages load correctly', () => {
  cy.url().should('include', '/products/');
});

When('I navigate to Newsletter section under Resources and submit the form', () => {
  resourcesPage.subscribeNewsletter();
});

Then('I should see a confirmation message', () => {
  cy.contains("Thank you for signing up for our newsletter").should('exist');
});
export class ResourcesPage {
    subscribeNewsletter() {
      cy.get('nav').contains('Resources').trigger('mouseover');
      cy.contains('Newsletter').click();
      cy.get('input[name="email"]').type('test@email.com');
      cy.get('form').submit();
    }
  }
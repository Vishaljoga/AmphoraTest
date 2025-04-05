export class ProductsPage {
    clickAllProducts() {
      cy.get('nav').contains('Products').trigger('mouseover');
      cy.get('nav [role="menu"]').find('a').each(($el) => {
        const href = $el.attr('href');
        if (href && href.includes('/products/')) {
          cy.visit(`https://www.amphora.net${href}`);
          cy.get('h1').should('exist');
        }
      });
    }
  }
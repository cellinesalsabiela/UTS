describe('template spec', () => {
  it('Search Product', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').clear('w');
    cy.get('#search_product').type('winter');
    cy.get('#submit_search').click();
    /* ==== End Cypress Studio ==== */
  })
})
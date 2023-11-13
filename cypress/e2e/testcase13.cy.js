describe('template spec', () => {
  it('Verify Product Quantity in Cart', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get(':nth-child(5) > .btn').click();
    cy.get('.modal-footer > .btn').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
    /* ==== End Cypress Studio ==== */
  })
})
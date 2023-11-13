describe('template spec', () => {
  it('Remove Products From Cart', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('.modal-body').click();
    cy.get('u').click();
    cy.get('.cart_quantity_delete').click();
    /* ==== End Cypress Studio ==== */
  })
})
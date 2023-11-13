describe('template spec', () => {
  it('Add To Cart From Recommended Items', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn').click({force:true});
    cy.get('.modal-body > :nth-child(2)').click({force:true});
    cy.get('u').click({force:true});
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.nav > :nth-child(2) > a').click();
    cy.get('.shop-menu > .nav > :nth-child(1) > a').click();
    cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('u').click();
    /* ==== End Cypress Studio ==== */
  })
})
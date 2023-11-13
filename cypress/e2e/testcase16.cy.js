describe('template spec', () => {
  it('Place Order: Login Before Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('c');
    cy.get('[data-qa="login-email"]').type('cellzapry@gmail.com');
    cy.get('[data-qa="login-password"]').clear('c');
    cy.get('[data-qa="login-password"]').type('cellzapry');
    cy.get('[data-qa="login-button"]').click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('hadeh');
    cy.get('[data-qa="name-on-card"]').type('hadeh');
    cy.get('[data-qa="card-number"]').clear('3');
    cy.get('[data-qa="card-number"]').type('31');
    cy.get('[data-qa="cvc"]').clear('2');
    cy.get('[data-qa="cvc"]').type('23');
    cy.get('[data-qa="expiry-month"]').clear('M');
    cy.get('[data-qa="expiry-month"]').type('Mey');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2034');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
  })
})
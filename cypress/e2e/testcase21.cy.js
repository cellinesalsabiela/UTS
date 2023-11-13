describe('template spec', () => {
  it('Add Review On Product', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(10) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('#name').clear('Irene');
    cy.get('#name').type('Irene');
    cy.get('#email').clear('salsabiela@gmail.com');
    cy.get('#email').type('salsabiela@gmail.com');
    cy.get('#review').click();
    cy.get('#review').click();
    cy.get('#review').click();
    cy.get('#review').click();
    cy.get('#review').click();
    cy.get('#button-review').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#review').click();
    cy.get('#review').click();
    cy.get('#review').click();
    cy.get('#review').click();
    cy.get('#button-review').click();
    cy.get('#button-review').click();
    cy.get('#name').clear('salsabiela');
    cy.get('#name').type('salsabiela');
    cy.get('#email').clear('salsabiela@gmail.com');
    cy.get('#email').type('salsabiela@gmail.com');
    cy.get('#review').click();
    cy.get('#review').click();
    cy.get('#button-review').click();
    /* ==== End Cypress Studio ==== */
  })
})
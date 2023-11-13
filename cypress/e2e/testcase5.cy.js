describe('template spec', () => {
  it('Register User With Existing Email', () => {
    cy.visit('https://www.automationexercise.com/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').click();
    cy.get('[data-qa="login-email"]').click();
    cy.get('[data-qa="signup-name"]').clear('s');
    cy.get('[data-qa="signup-name"]').type('salsabiela@gmail.com');
    cy.get('[data-qa="signup-email"]').clear('01');
    cy.get('[data-qa="signup-email"]').type('010302');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="signup-button"]').click();
    cy.get('body').click();
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="signup-button"]').click();
    cy.get('body').click();
    cy.get('[data-qa="signup-button"]').click();
    cy.get('body').click();
    cy.get('#form > .container > .row').click();
    cy.get('[data-qa="signup-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})
describe('template spec', () => {
  it('Logout user', () => {
    cy.visit('https://www.automationexercise.com/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('salsabiela@gmail.com');
    cy.get('[data-qa="login-email"]').type('salsabiela@gmail.com');
    cy.get('[data-qa="login-password"]').click();
    cy.get('[data-qa="login-password"]').click();
    cy.get('[data-qa="login-password"]').clear('0');
    cy.get('[data-qa="login-password"]').type('010302');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})
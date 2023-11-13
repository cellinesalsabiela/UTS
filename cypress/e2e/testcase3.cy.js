describe('template spec', () => {
  it ('login unsuccess', () =>{
    cy.visit('https://www.automationexercise.com/');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear();
    cy.get('[data-qa="login-email"]').type('celline@gmail.com');
    cy.get('[data-qa="login-password"]').clear('1');
    cy.get('[data-qa="login-password"]').type('12345');
    cy.get('[data-qa="login-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})
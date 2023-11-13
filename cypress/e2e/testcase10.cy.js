describe('template spec', () => {
  it('Verify Subscription in Home Page', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(1) > a').click();
    cy.get('#susbscribe_email').clear('salsabiela@gmail.com');
    cy.get('#susbscribe_email').type('salsabiela@gmail.com');
    cy.get('#subscribe > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
})
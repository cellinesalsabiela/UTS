describe('template spec', () => {
  it('Verify Test Case Page', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get(':nth-child(2) > .panel > .panel-heading > .panel-title > a > u').click();
    cy.get(':nth-child(3) > .panel > .panel-heading > .panel-title > a > u').click();
    cy.get(':nth-child(4) > .panel > .panel-heading > .panel-title > a > u').click();
    /* ==== End Cypress Studio ==== */
  })
})
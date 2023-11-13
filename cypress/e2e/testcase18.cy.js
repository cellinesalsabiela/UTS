describe('template spec', () => {
  it('View Categpry Product', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click();
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
    cy.get(':nth-child(3) > .panel-heading > .panel-title > a > .badge > .fa').click();
    cy.get('#Kids > .panel-body > ul > :nth-child(2) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})
describe('template spec', () => {
  it('Contact Us Form', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
    cy.get('[data-qa="name"]').clear('salsabiela');
    cy.get('[data-qa="name"]').type('salsabiela');
    cy.get('[data-qa="email"]').clear('salsabiela@gmail.com');
    cy.get('[data-qa="email"]').type('salsabiela@gmail.com');
    cy.get('[data-qa="subject"]').clear('t');
    cy.get('[data-qa="subject"]').type('nyoba guys');
    cy.get('[data-qa="message"]').click();
    cy.get('[data-qa="message"]').click();
    cy.get('[data-qa="message"]').click();
    cy.get(':nth-child(6) > .form-control').click();
    cy.get('[data-qa="submit-button"]').click();
    cy.get('#form-section > .btn').click();
    /* ==== End Cypress Studio ==== */
  })
})
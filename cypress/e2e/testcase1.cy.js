describe('template spec', () => {
  it('sign up success', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').type('salsabielaaa');
    cy.get('[data-qa="signup-email"]').type('salsabielaaa@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(4) > .top').click();
    cy.get('#id_gender2').check();
    cy.get('[data-qa="password"]').clear('0');
    cy.get('[data-qa="password"]').type('010302');
    cy.get('[data-qa="days"]').select('1');
    cy.get('[data-qa="months"]').select('3');
    cy.get('[data-qa="years"]').select('2002');
    cy.get('[data-qa="first_name"]').clear('S');
    cy.get('[data-qa="first_name"]').type('Salsa');
    cy.get('[data-qa="last_name"]').clear('B');
    cy.get('[data-qa="last_name"]').type('Bielaaa');
    cy.get('[data-qa="company"]').clear('X');
    cy.get('[data-qa="company"]').type('XZY');
    cy.get('[data-qa="address"]').click();
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="address"]').clear('C');
    cy.get('[data-qa="address"]').type('Cepu');
    cy.get('[data-qa="address2"]').click();
    cy.get('[data-qa="state"]').clear('J');
    cy.get('[data-qa="state"]').type('Jateng');
    cy.get('[data-qa="city"]').clear('C');
    cy.get('[data-qa="city"]').type('Cepu');
    cy.get('[data-qa="zipcode"]').clear('5');
    cy.get('[data-qa="zipcode"]').type('54152');
    cy.get(':nth-child(20) > label').click();
    cy.get('[data-qa="mobile_number"]').clear('2');
    cy.get('[data-qa="mobile_number"]').type('2319748');
    cy.get('[data-qa="create-account"]').click();
    cy.get('.col-sm-9 > :nth-child(2)').should('have.text', 'Congratulations! Your new account has been successfully created!');
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})
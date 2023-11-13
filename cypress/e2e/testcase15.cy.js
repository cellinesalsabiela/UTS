describe('template spec', () => {
  it('Place Order: Register Before Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').type('salsabieee');
    cy.get('[data-qa="signup-email"]').type('salsabieee@gmail.com');
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
    cy.get('[data-qa="last_name"]').type('Bieee');
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
    cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click({force: true});
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('#cart_items').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get(':nth-child(2) > .col-sm-12 > .control-label').click();
    cy.get('[data-qa="name-on-card"]').clear('h');
    cy.get('[data-qa="name-on-card"]').type('hadeh');
    cy.get('[data-qa="card-number"]').clear('1');
    cy.get('[data-qa="card-number"]').type('1234');
    cy.get('[data-qa="cvc"]').clear('0');
    cy.get('[data-qa="cvc"]').type('01');
    cy.get('[data-qa="expiry-month"]').clear('A');
    cy.get('[data-qa="expiry-month"]').type('April');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2024');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})
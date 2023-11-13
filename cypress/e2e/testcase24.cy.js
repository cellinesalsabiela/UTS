describe('template spec', () => {
  it('Download Invoice After Purchase Order ', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.col-sm-6 > .btn').click();

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.modal-body > :nth-child(2) > a > u').click();
    cy.get('[data-qa="signup-name"]').clear('k');
    cy.get('[data-qa="signup-name"]').type('kim ceyee');
    cy.get('.signup-form > form').click();
    cy.get('[data-qa="signup-email"]').clear('j');
    cy.get('[data-qa="signup-email"]').type('kimceyee@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="name"]').click();
    cy.get('[data-qa="password"]').clear('1');
    cy.get('[data-qa="password"]').type('12345');
    cy.get('[data-qa="days"]').select('12');
    cy.get('[data-qa="months"]').select('1');
    cy.get('.login-form > form').click();
    cy.get('[data-qa="years"]').select('1993');
    cy.get('[style="height: auto !important;"] > .col-sm-4').click();
    cy.get('form > :nth-child(7)').click();
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('K');
    cy.get('[data-qa="first_name"]').type('Kim');
    cy.get('[data-qa="last_name"]').clear('ceyee');
    cy.get('[data-qa="last_name"]').type('ceyee');
    cy.get('[data-qa="company"]').clear('E');
    cy.get('[data-qa="company"]').type('EXO');
    cy.get('[data-qa="address"]').clear('e');
    cy.get('[data-qa="address"]').type('eri');
    cy.get('[data-qa="address2"]').clear('e');
    cy.get('[data-qa="address2"]').type('exol');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').clear('h');
    cy.get('[data-qa="state"]').type('han');
    cy.get('[data-qa="city"]').clear('h');
    cy.get('[data-qa="city"]').type('hani');
    cy.get('[data-qa="zipcode"]').clear('3');
    cy.get('[data-qa="zipcode"]').type('34567');
    cy.get('[data-qa="mobile_number"]').clear('9');
    cy.get('[data-qa="mobile_number"]').type('9875422');
    cy.get('[data-qa="create-account"]').click();
    cy.get(':nth-child(7) > .btn', { timeout: 100000 }).click();
    cy.get('[data-qa="name-on-card"]').clear('7');
    cy.get('[data-qa="name-on-card"]').type('78');
    cy.get('[data-qa="card-number"]').clear('o');
    cy.get('[data-qa="card-number"]').type('90');
    cy.get('[data-qa="name-on-card"]').clear('7');
    cy.get('[data-qa="name-on-card"]').type('oye');
    cy.get('[data-qa="cvc"]').clear('3');
    cy.get('[data-qa="cvc"]').type('31');
    cy.get('[data-qa="expiry-month"]').clear('J');
    cy.get('[data-qa="expiry-month"]').type('Jan');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2034');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('.col-sm-9 > .btn-default').click();
    cy.get(':nth-child(7) > .btn', { timeout: 100000 }).click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})
describe('template spec', () => {
  it(' Verify address details in checkout page', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    cy.get('[data-qa="signup-name"]').type('cellzapry');
    cy.get('[data-qa="signup-email"]').type('cellzapry@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('cellzapry');
    cy.get('[data-qa="days"]').select('4');
    cy.get('[data-qa="months"]').select('9');
    cy.get('[data-qa="years"]').select('2001');
    cy.get('#newsletter').check();
    cy.get('[data-qa="first_name"]').click();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type('cellzapry');
    cy.get('[data-qa="first_name"]').type('cell');
    cy.get('[data-qa="last_name"]').type('acae');
    cy.get('[data-qa="company"]').type('Indonesia');
    cy.get('[data-qa="address"]').type('Kapi pramuja');
    cy.get('[data-qa="address2"]').type('Kapi Pramuja');
    cy.get('.login-form > form').click();
    cy.get('[data-qa="company"]').type('Zelixir');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').click();
    cy.get('[data-qa="state"]').click();
    cy.get('[data-qa="state"]').type('indo');
    cy.get('[data-qa="city"]').type('malang');
    cy.get('[data-qa="zipcode"]').type('142311');
    cy.get('[data-qa="mobile_number"]').clear('0');
    cy.get('[data-qa="mobile_number"]').type('089123415');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    // /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type('cellzapry@gmail.com');
    cy.get('[data-qa="login-password"]').type('cellzapry');
    cy.get('[data-qa="login-button"]').click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force: true});
    cy.get('u').click();
    cy.get('#cart_items > :nth-child(1)').should('be.visible');
    cy.get('.col-sm-6 > .btn').click();
    cy.get('#address_delivery').should('have.text', '\n\t\t\t\t\t\t\tYour delivery address\n\t\t\t\t\t\t\tMr. GioGiovanni Rahmadan\n\t\t\t\t\t\t\tIndonesiaZelixir\n\t\t\t\t\t\t\tKapi pramuja\n\t\t\t\t\t\t\tKapi Pramuja\n\t\t\t\t\t\t\tmalang indo\n\t\t\t\t\t\t\t\t142311\n\t\t\t\t\t\t\tSingapore\n\t\t\t\t\t\t\t089123415\n\t\t\t\t\t\t');
    cy.get('#address_invoice').should('have.text', '\n\t\t\t\t\t\t\tYour billing address\n\t\t\t\t\t\t\tMr. GioGiovanni Rahmadan\n\t\t\t\t\t\t\tIndonesiaZelixir\n\t\t\t\t\t\t\tKapi pramuja\n\t\t\t\t\t\t\tKapi Pramuja\n\t\t\t\t\t\t\tmalang indo\n\t\t\t\t\t\t\t\t142311\n\t\t\t\t\t\t\tSingapore\n\t\t\t\t\t\t\t089123415\n\t\t\t\t\t\t');
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})
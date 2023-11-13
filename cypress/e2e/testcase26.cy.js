describe('template spec', () => {
  it('Verify Scroll Up Without Arrow Button adn Scroll Down Functionality', () => {
    cy.visit('https://www.automationexercise.com/')
    // Scroll down
    cy.scrollTo('bottom');
    cy.wait(1000); // Wait for the scroll to complete (adjust as needed)

    // Add your assertions or additional test steps here

    // Scroll up
    cy.scrollTo('top');
    cy.wait(1000); // Wait for the scroll to complete (adjust as needed)
  })
})
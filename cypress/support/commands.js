Cypress.Commands.add('checkLogo', () => {
    cy.get('img[src="/static/images/home/logo.png"]')
      .should('be.visible')
  })
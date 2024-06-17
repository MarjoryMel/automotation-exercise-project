Cypress.Commands.add('checkLogo', () => {
    cy.get('img[src="/static/images/home/logo.png"]')
        .should('be.visible')
  })

Cypress.Commands.add('checkNavBar' ,() =>{
    cy.get('.shop-menu > .nav')
        .should('be.visible')
})

Cypress.Commands.add('checkNavbarButtons', () => {
    for (let i = 1; i <= 8; i++) {
        cy.get(`.shop-menu > .nav > :nth-child(${i}) > a`)
            .should('be.visible')
    }
})

Cypress.Commands.add('clickOnTheNavbarHome', () => {
    cy.get('.shop-menu > .nav > :nth-child(1) > a')
    .click()
})

Cypress.Commands.add('clickOnTheNavbarProducts', () => {
    cy.get('.shop-menu > .nav > :nth-child(2) > a')
    .click()
})

Cypress.Commands.add('clickOnTheNavbarCart', () => {
    cy.get('.shop-menu > .nav > :nth-child(3) > a')
    .click()
})

Cypress.Commands.add('clickOnTheNavbarLogin', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a')
    .click()
})

Cypress.Commands.add('clickOnTheNavbarTestCases', () => {
    cy.get('.shop-menu > .nav > :nth-child(5) > a')
    .click()
})

Cypress.Commands.add('clickOnTheNavbarApi', () => {
    cy.get('.shop-menu > .nav > :nth-child(6) > a')
    .click()
})

Cypress.Commands.add('clickOnTheNavbarVideo', () => {
    cy.get('.shop-menu > .nav > :nth-child(7) > a')
        .invoke('removeAttr', 'target')
        .click()
})

Cypress.Commands.add('clickOnTheNavbarContact', () => {
    cy.get('.shop-menu > .nav > :nth-child(8) > a')
    .click()
})



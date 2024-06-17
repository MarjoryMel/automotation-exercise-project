describe('Automotation Exercise', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  })

  it('verifica se a logotipo está visível', () =>{
    cy.checkLogo()
  })

  it('verifica se a bava de navegação está visível', () =>{
    cy.checkNavBar()
  })

  it('verificar se os botões da barra de navegação estão visíveis', () =>{
    cy.checkNavbarButtons()
  })

  it('clica nos botões da barra de navegação', () =>{
    cy.clickOnTheNavbarHome()
    cy.url().should('include', '/')

    cy.clickOnTheNavbarProducts()
    cy.url().should('include', '/products')

    cy.clickOnTheNavbarCart()
    cy.url().should('include', '/view_cart')

    cy.clickOnTheNavbarLogin()
    cy.url().should('include', '/login')

    cy.clickOnTheNavbarTestCases()
    cy.url().should('include', '/test_cases')

    cy.clickOnTheNavbarApi()
    cy.url().should('include', '/api_list')

    cy.clickOnTheNavbarContact()
    cy.url().should('include', 'contact_us')

    cy.clickOnTheNavbarVideo()
    cy.contains('AutomationExercise').should('be.visible')
  })
})
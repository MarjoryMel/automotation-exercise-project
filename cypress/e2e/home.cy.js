describe('Automotation Exercise', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  })

  it('verifica se a logotipo está visível', () =>{
    cy.checkLogo()
  })
})
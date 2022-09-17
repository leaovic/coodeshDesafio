describe('Testando vários aspectos da página Beta da Coodesh', () => {


  it('Deve carregar a página principal corretamente', () => {
    cy.home('/')
    cy.get(':nth-child(1) > .nav-link').should('be.visible')
    cy.get(':nth-child(2) > .nav-link').should('be.visible')
    cy.get('.nav-link > .transition-3d-hover').should('be.visible')
    cy.get('.space-top-lg-2 > .mb-0').click()
    cy.get('.space-top-lg-2 > .mb-0').should('have.text', 'Conectamos developers validados às empresas')
  })

  it('Deve cadastrar um usuário', () => {
    cy.intercept('GET', '**/candidates').as('getCandidates')
    cy.cadastro()
    cy.cadastroFake()
    cy.questions()
  })
})
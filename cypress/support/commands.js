

import { faker } from '@faker-js/faker'

Cypress.Commands.add('home', () => {
  cy.intercept('GET', '**com').as('getPage')
  cy.visit('https://beta.coodesh.com/')
  cy.get('#onetrust-banner-sdk').should('be.visible')
  cy.get('#onetrust-accept-btn-handler').click()
  cy.wait('@getPage')
})

Cypress.Commands.add('questions', () => {
  cy.get('.shadow').should('contain', 'Back-End Developer')
  cy.get(':nth-child(1) > .custom-control > .checkbox-outline__label').click()
  cy.get(':nth-child(2) > .custom-control > .checkbox-outline__label').click()
  cy.get(':nth-child(3) > .custom-control > .checkbox-outline__label').click()
  cy.get('#years_experience').should('be.visible')
  cy.get('.col-md-12 > .form-text > div > :nth-child(1)').should('be.visible')
  cy.get('.col-md-12 > .form-text > div > :nth-child(1)').click()
  cy.get('#years_experience').should('be.visible')
  cy.get('#years_experience').select(2)
  cy.get(':nth-child(6) > .col-md-12').should('be.visible')
  cy.get('[class*="form-label"]').should('be.visible')
  cy.get('[controlid="address.city"]').should('be.visible')
  cy.get('[mode="single"]').should('be.visible')
  cy.get('.react-tel-input > .form-control').type('81999999999')
  cy.get('[controlid="address.city"]').type('Rio de Janeiro')
  cy.get('.w-100').click()
  cy.wait('@getCandidates')
  cy.get('.mt-3.col > .col-12 > :nth-child(3) > :nth-child(1)').contains('Alura').click()
  cy.get('#communities-0-relation').select('studying').should('have.value', 'studying')
  cy.get('.col-lg-12 > .react-select > .css-yk16xz-control > .css-13tza3w > .css-1wa3eu0-placeholder').should('be.visible')
  cy.get('.shadow').click()
  cy.get('.col-lg-12 > .react-select > .css-yk16xz-control > .css-13tza3w > .css-1wa3eu0-placeholder').click()
  cy.get('#react-select-3-option-1').click()
  cy.get('.css-1pahdxg-control > .css-13tza3w').click()
  cy.get('#react-select-3-option-2').click()
  cy.get('#race').select('multiracial')
  cy.get('#gender').select('male')
  cy.get('#sexual_orientation').select('heterosexual')
  cy.get('.btn-primary').click()
  cy.get('.h4').should('be.visible')
  cy.get('.btn-primary').should('be.visible')
  cy.get('.py-2 > .d-flex > .ml-2').should('be.visible')
  cy.get('.btn-primary').click()
  cy.get(':nth-child(1) > td > .rc-slider').click()
  cy.get(':nth-child(2) > td > .rc-slider').click()
  cy.get(':nth-child(3) > td > .rc-slider').click()
  cy.get(':nth-child(4) > td > .rc-slider').click()
  cy.get(':nth-child(5) > td > .rc-slider').click()
  cy.get(':nth-child(6) > td > .rc-slider').click()
  cy.get(':nth-child(7) > td > .rc-slider').click()
  cy.get(':nth-child(8) > td > .rc-slider').click()
  cy.get(':nth-child(9) > td > .rc-slider').click()
  cy.get(':nth-child(10) > td > .rc-slider').click()
  cy.get('.btn-primary').should('be.visible')
  cy.get('.col-auto').should('be.visible')
  cy.get('.btn-primary').click()
  cy.get(':nth-child(1) > td > .rc-slider').click()
  cy.get(':nth-child(2) > td > .rc-slider').click()
  cy.get(':nth-child(3) > td > .rc-slider').click()
  cy.get(':nth-child(4) > td > .rc-slider').click()
  cy.get(':nth-child(5) > td > .rc-slider').click()
  cy.get(':nth-child(6) > td > .rc-slider').click()
  cy.get(':nth-child(7) > td > .rc-slider').click()
  cy.get(':nth-child(8) > td > .rc-slider').click()
  cy.get(':nth-child(9) > td > .rc-slider').click()
  cy.get(':nth-child(10) > td > .rc-slider').click()
  cy.get('.btn-primary').should('be.enabled')
  cy.get('.btn-primary').should('be.visible')
  cy.get('.btn-primary').click()
  cy.get(':nth-child(1) > td > .rc-slider').click()
  cy.get(':nth-child(2) > td > .rc-slider').click()
  cy.get(':nth-child(3) > td > .rc-slider').click()
  cy.get(':nth-child(4) > td > .rc-slider').click()
  cy.get(':nth-child(5) > td > .rc-slider').click()
  cy.get(':nth-child(6) > td > .rc-slider').click()
  cy.get(':nth-child(7) > td > .rc-slider').click()
  cy.get(':nth-child(8) > td > .rc-slider').click()
  cy.get(':nth-child(9) > td > .rc-slider').click()
  cy.get('.btn-primary').should('be.enabled')
  cy.get('.btn-primary').should('be.visible')
  cy.get('.btn-primary').click()
  cy.get('.styles_textProfile__rmmxI').should('be.visible')
  cy.get('.btn-primary').click()
  cy.get(':nth-child(3) > .p-3 > .align-items-center').should('be.visible')
  cy.get(':nth-child(3) > .p-3 > .align-items-center > .media-body > .h4').click()
  cy.get('.col-lg-7 > .input-group > .form-control').should('be.visible')
  cy.get('.col-lg-3 > .input-group > .form-control').should('be.visible')
  cy.get('.align-self-lg-end > .btn-block').should('be.enabled')
  cy.get('.align-self-lg-end > .btn-block').should('be.visible')
  cy.get('#filter-categories').should('be.visible')
  cy.get('#filter-level').should('be.visible')
  cy.get('#filter-skills').should('be.visible')
  cy.get('#filter-salary_range').should('be.visible')
  cy.get('#filter-type').should('be.visible')
  cy.get('#filter-home_office').should('be.visible')
  cy.get('.d-xl-none > .btn-text').should('be.visible')
  cy.get('.d-xl-none > .btn-text').should('be.enabled')
  cy.get('.col-lg-7 > .input-group > .form-control').clear('c')
  cy.get('.col-lg-7 > .input-group > .form-control').type('coodesh')
  cy.get('.align-self-lg-end > .btn-block').click()
  cy.get(':nth-child(1) > .card > .p-3').should('be.visible')
  cy.get(':nth-child(2) > .card > .p-3').should('be.visible')
  cy.get(':nth-child(3) > .card > .p-3').should('be.visible')
})

Cypress.Commands.add('cadastro', (
  username = Cypress.env('USER_EMAIL'),
  password = Cypress.env('USER_PASSWORD'),
  { cacheSession = false } = {}
) => {
  const login = () => {
    cy.visit('/auth/signin/candidates')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#email').type(username)
    cy.get('#password').type(password, { log: false })
    cy.contains('Cadastre-se').click()
  }

  if (cacheSession) {
    cy.session([username, password], login)
  } else {
    login()
  }
})

Cypress.Commands.add('cadastroFake', (
  nomeFake = faker.name.fullName(),
  emailFake = faker.internet.email(),
  senhaFake = faker.internet.password(20)+'@',
  nomeCompletoFake = faker.name.fullName(),

  { cacheSession = false } = {}
) => {
  const login = () => {
    cy.visit('/auth/signin/candidates')
    // cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#email').type(emailFake)
    cy.get('#password').type(senhaFake, { log: false })
    cy.contains('Cadastre-se').click()
    cy.get('#displayName').type(nomeCompletoFake)
    cy.get('#email').type(emailFake)
    cy.get('#password').type(senhaFake)
    cy.get('.custom-control-label').should('be.visible')
    cy.get('[type=checkbox]').check({ force: true }).should('be.checked')
    cy.get('[type=submit]').click()
  }

  if (cacheSession) {
    cy.session([nomeFake, senhaFake], login)
  } else {
    login()
  }
})

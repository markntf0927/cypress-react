/// <reference types="cypress" />

describe('Init App', () => {
  const URL = 'http://localhost:9000'

  it('is working', () => {
    expect(true).to.equal(true)
  })

  it('opens the app', () => {
    cy.visit(URL)
  })
})

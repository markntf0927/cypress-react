/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import LoginForm from '../components/LoginForm'

describe('Tests <LoginForm/>', () => {
  const email = 'input[name="email"]'
  const password = 'input[name="password"]'
  const tel = 'input[name="tel"]'

  const submit = '[data-cy="submit"]'

  beforeEach(() => {
    mount(<LoginForm />)
  })

  it('checks input values are empty', () => {
    cy.log(`** should be empty input **`)

    cy.get(email).should('have.value', '')
    cy.get(password).should('have.value', '')
    cy.get(tel).should('have.value', '')
  })


  it('Types input values & submit form', () => {
    cy.log(`** should be empty input **`)

    cy.get(email).should('have.value', '')
    cy.get(password).should('have.value', '')
    cy.get(tel).should('have.value', '')

    cy.log(`** types values **`)

    const vals = ['test@email.com', '123ps', '12345678']

    cy.get(email).type(vals[0]).should('have.value', vals[0])
    cy.get(password).type(vals[1]).should('have.value', vals[1])
    cy.get(tel).type(vals[2]).should('have.value', vals[2])

    cy.log(`** click submit **`)

    cy.get(submit).click()


    cy.log(`** submit button should change to loading **`)

    cy.contains(submit, 'Submitting...')
  })
})

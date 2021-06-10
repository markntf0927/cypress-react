/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import LoginForm from '../components/LoginForm'

describe('Tests <LoginForm/>', () => {
  beforeEach(() => {
    mount(<LoginForm />)
  })

  it('Types input values', () => {
    cy.log(`** should be empty input **`)

    cy.get('input[name="email"]').should('have.value', '')
    cy.get('input[name="password"]').should('have.value', '')
    cy.get('input[name="tel"]').should('have.value', '')


    cy.log(`** types values **`)

    const vals = ['test@email.com', '123ps', '12345678']

    cy.get('input[name="email"]').type(vals[0]).should('have.value', vals[0])
    cy.get('input[name="password"]').type(vals[1]).should('have.value', vals[1])
    cy.get('input[name="tel"]').type(vals[2]).should('have.value', vals[2])
  })


  it('Types input values & submit form', () => {
    cy.log(`** should be empty input **`)

    cy.get('input[name="email"]').should('have.value', '')
    cy.get('input[name="password"]').should('have.value', '')
    cy.get('input[name="tel"]').should('have.value', '')


    cy.log(`** types values **`)

    const vals = ['test@email.com', '123ps', '12345678']

    cy.get('input[name="email"]').type(vals[0]).should('have.value', vals[0])
    cy.get('input[name="password"]').type(vals[1]).should('have.value', vals[1])
    cy.get('input[name="tel"]').type(vals[2]).should('have.value', vals[2])


    cy.log(`** click submit **`)

    cy.get('button[type="submit"]').click()


    cy.log(`** submit button should change to loading **`)

    cy.get('button[type="submit"]').should('have.value', 'Submitting...')

  })
})

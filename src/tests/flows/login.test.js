/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import App from '../../App'
import { storeUser } from '../../services/auth'

import '../../styles/main.scss'

describe('login flow', () => {
  const email = 'input[name="email"]'
  const password = 'input[name="password"]'
  const tel = 'input[name="tel"]'
  const submit = '[data-cy="submit"]'


  Cypress.Commands.add('login', () => {
    const url = 'https://reqres.in/api/login'

    const body = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    }

    const temp = {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      role: 'supplier',
    }

    cy.request({
      method: 'POST',
      url,
      body,
    }).then((res) => {
      if (!res) return console.log('login error')

      console.log('res', res)

      storeUser(res.token, temp.role)
    })
  })

  beforeEach(() => {
    mount(<App />)
  })

  context('goes to login', () => {
    beforeEach(() => {
      cy.contains('.nav-link', 'Login').click()
    })

    it('go to login page', () => {
      cy.url().should('include', '/login')
    })
  })

  context('checks login form inputs', () => {
    beforeEach(() => {
      cy.contains('.nav-link', 'Login').click()
      cy.url().should('include', '/login')
    })

    it('checks inputs are empty', () => {
      cy.log(`** should be empty input **`)

      cy.get(email).should('have.value', '')
      cy.get(password).should('have.value', '')
      cy.get(tel).should('have.value', '')
    })

    it('shows input error, all', () => {
      cy.log(`** should be empty input **`)

      cy.get(email).should('have.value', '')
      cy.get(password).should('have.value', '')
      cy.get(tel).should('have.value', '')

      cy.log(`** types values **`)

      cy.log(`** click submit **`)

      cy.get(submit).click()

      cy.log(`** show error message **`)

      cy.get('[data-cy="error"]').should('be.visible')
    })


    it('logins successfully', () => {

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

      cy.wait(3000).then(() => {
        cy.url().should('include', '/')

        cy.contains('Logout')
      })
    })
  })
})

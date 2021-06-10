/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import LoginForm from '../components/LoginForm'

describe('Tests <LoginForm/>', () => {
  beforeEach(() => {
    mount(<LoginForm />)
  })

  it('Types input values', () => {
    cy.get('input[type="email"]').should('have.value', '')
  })
})

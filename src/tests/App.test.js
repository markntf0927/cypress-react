/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import App from '../App'


describe('Tests <App/>', () => {
  beforeEach(() => {
    mount(
      <App />
    )
  })

  it('renders learn react link', ()=> {
    cy.get('a').contains('Learn React')
  })

})




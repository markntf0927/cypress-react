/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import '../styles/main.scss'

import Toggle from '../components/Toggle'

describe('Tests <Toggle/>', () => {
  beforeEach(() => {
    mount(
      <Toggle />
    )
  })

  it('expects toggle button is false', ()=> {
    cy.get('div.toggle-status').contains('false')
  })

  it('clicks toggle button to true', ()=> {
    cy.get('div.toggle-status').contains('false')
    cy.get('button.toggle-btn').click()
    cy.get('div.toggle-status').contains('true')
  })

  it('clicks toggle button for 20 times', () => {
    for (let idx = 0; idx < 20; idx++) {
      cy.get('div.toggle-status').contains('false')

      cy.get('button.toggle-btn').click()
      cy.get('div.toggle-status').contains('true')

      cy.get('button.toggle-btn').click()
      cy.get('div.toggle-status').contains('false')
    }
  })
})




import React from 'react'
import { mount } from '@cypress/react'

import Button from './state'

describe('State component', () => {
  const textOn = 'Turn on'
  const textOff = 'Turn off'
  const btn = '[data-cy="state-btn"]'

  beforeEach(() => {
    // pass stub and save it under an alias
    // so we can easily get it later with cy.get('@handleChange')
    const stub = cy.stub().as('handleChange')

    mount(<Button onChange={stub} />)
  })

  it('shows button', () => {
    cy.get(btn)
    cy.get(btn).contains(textOn).should('be.visible')
  })

  it('changes button state to TRUE', () => {
    cy.get(btn).click()
    cy.get('@handleChange').should('have.been.calledOnce')
    cy.get(btn).contains(textOff).should('be.visible')
  })

  it('toggles button state', () => {
    cy.get(btn).click().click()

    cy.get('@handleChange').should('have.been.calledTwice')
    cy.get(btn).contains(textOn).should('be.visible')
  })
})

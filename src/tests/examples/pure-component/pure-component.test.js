import React, { useState } from 'react'
import { mount } from '@cypress/react'

import Pure from './pure-component'
import Button from './button'

describe('tests pure component', () => {
  const comp = '[data-cy="pure-comp"]'

  it('renders component', () => {
    const text = 'hello'

    mount(<Pure>{text}</Pure>)

    cy.get(comp).contains(text)
  })

  context('renders children with onClick event', () => {
    beforeEach(() => {
      mount(
        <Pure>
          <Button />
        </Pure>
      )
    })

    it('renders children button', () => {
      cy.contains('button', 'click')
      cy.contains('[data-cy="count"]', '0')

      cy.log(`** did not click **`)
    })

    it('clicks children button once', () => {
      cy.contains('button', 'click')
      cy.contains('[data-cy="count"]', '0')

      cy.get('button').click()
      cy.contains('[data-cy="count"]', '1')

      cy.log(`** clicked 1 **`)
    })

    it('clicks children button multiple times', () => {
      const TIME = 20

      cy.contains('button', 'click')
      cy.contains('[data-cy="count"]', '0')

      for (let idx = 0; idx < TIME; idx++) {
        cy.get('button').click()
        cy.contains('[data-cy="count"]', `${idx + 1}`)

        cy.log(`** clicked ${idx + 1} **`)
      }
    })
  })
})

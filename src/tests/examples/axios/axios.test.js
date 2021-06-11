import React from 'react'
import { mount } from '@cypress/react'
import Chance from 'chance'

import Posts from './posts'

const Axios = require('axios')
const chance = new Chance()

describe('component with axios call', () => {
  const post = '[data-cy="post"]'

  // beforeEach(() => {
  //   mount(<Posts />)
  // })

  it('mounts component with default data', () => {
    mount(<Posts />)
    cy.get(post).should('have.length', 10)
  })

  it('mocks axios request', () => {
    const data = [
      {
        id: 1,
        name: chance.name(),
        username: chance.word(),
        email: chance.email(),
      },
      {
        id: 2,
        name: chance.name(),
        username: chance.word(),
        email: chance.email(),
      },
      {
        id: 3,
        name: chance.name(),
        username: chance.word(),
        email: chance.email(),
      },
    ]

    // set a mock axios function to test
    cy.stub(Axios, 'get').resolves({ data }).as('get')

    mount(<Posts />)

    cy.get(post).should('have.length', 3)
    cy.get('@get').should('have.been.called')
  })

  it('retores default axios request', () => {
    mount(<Posts />)

    cy.get(post).should('have.length', 10)
  })
})

/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import { loremIpsum } from 'lorem-ipsum'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/main.scss'

import Todo from '../../components/Todo'

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

describe('Mounts <Todo/>', () => {
  beforeEach(() => {
    mount(<Todo />)
  })

  it('Renders Section', () => {
    cy.get('h5').contains('Todo Section')
  })

  it('Checks default todo is empty []', () => {
    cy.get('h5').contains('Todo Section')

    cy.get('.todo').should('have.length', 0)
  })

  it('Checks todo value if it exists', () => {
    cy.get('button.show-btn').click()
    cy.get('button.add-btn').click()

    cy.log('** should show error message & blocks to add todo **')

    cy.get('p.small.error').should('have.length', 1)

    const input = loremIpsum()

    cy.get('input.todo-input').type(input).should('have.value', input)

    cy.log('** clicks back button **')

    cy.get('button.back-btn').click()

    cy.log('** should hide error message **')

    cy.get('p.small.error').should('have.length', 0)

    cy.get('button.show-btn').click()

    cy.get('input.todo-input').should('have.value', '')
  })
})

describe('Blocks empty todo', () => {
  beforeEach(() => {
    mount(<Todo />)
  })

  it('Blocks new todo with empty value', () => {
    cy.get('button.show-btn').click()
    cy.get('button.add-btn').click()

    cy.log('** should show error message & blocks to add todo **')

    cy.get('p.small.error').should('have.length', 1)
  })

  it('Blocks new todo with empty value & go back', () => {
    cy.get('button.show-btn').click()
    cy.get('button.add-btn').click()

    cy.log('** should show error message & blocks to add todo **')

    cy.get('p.small.error').should('have.length', 1)

    cy.log('** clicks back button **')

    cy.get('button.back-btn').click()

    cy.log('** should hide error message **')

    cy.get('p.small.error').should('have.length', 0)
  })
})

describe('Adds todos', () => {
  beforeEach(() => {
    mount(<Todo />)
  })

  it('Adds number of todos', () => {
    const MIN = 5
    const MAX = 10

    const randomNum = getRandomNum(MIN, MAX)

    cy.log(`** should have ${randomNum} todos in total **`)

    for (let idx = 0; idx < randomNum; idx++) {
      cy.get('button.show-btn').click()

      const input = loremIpsum()

      cy.get('input.todo-input').type(input).should('have.value', input)

      cy.get('button.add-btn').click()

      cy.get('.todo').should('have.length', idx + 1)
    }
  })
})

describe('Removes todo', () => {
  beforeEach(() => {
    mount(<Todo />)
  })

  it('Removes the correct number of todos', () => {
    const MIN = 5
    const MAX = 10

    const randomNum = getRandomNum(MIN, MAX)

    cy.log(`** should have ${randomNum} todos in total **`)

    for (let idx = 0; idx < randomNum; idx++) {
      cy.get('button.show-btn').click()

      const input = loremIpsum()

      cy.get('input.todo-input').type(input).should('have.value', input)

      cy.get('button.add-btn').click()

      cy.get('.todo').should('have.length', idx + 1)
    }

    for (let idx = 0; idx < randomNum; idx++) {
      cy.get(`[data-cy-id=${idx + 1}]`).click()
      cy.log(`** should remove todo id: ${idx + 1} **`)

      cy.get('.todo').should('have.length', randomNum - (idx + 1))
    }
  })
})

import React from 'react'
import { mount } from '@cypress/react'
import '../styles/main.scss'

import { loremIpsum } from 'lorem-ipsum'

import TodoList from '../components/Todo/TodoList'

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

describe('Renders <Todo/>', () => {
  it('Contains the correct number of todos', () => {
    //* randomly generates number of todos
    const MIN = 10
    const MAX = 30

    const todos = []

    const randomNum = getRandomNum(MIN, MAX)

    for (let idx = 0; idx < randomNum; idx++) {
      todos.push({
        id: idx + 1,
        content: loremIpsum(),
      })
    }

    cy.log(`** should have ${randomNum} todos **`)

    mount(<TodoList todo={todos} />)

    cy.get('.todo').should('have.length', todos.length)
  })
})

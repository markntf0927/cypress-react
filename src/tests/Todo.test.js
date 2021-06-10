import React from 'react'
import { mount } from '@cypress/react'
import '../styles/main.scss'

import Todo from '../components/Todo'
import TodoList from '../components/Todo/TodoList'


describe('Tests <Todo/>', () => {
  beforeEach(() => {
    mount(
      <Todo />
    )
  })

  it('renders Section', ()=> {
    cy.get('h5').contains('Todo Section')
  })

  it('default todo is empty []', ()=> {
    cy.get('h5').contains('Todo Section')

    cy.get('.todo').should('have.length', 0)
  })

  it('adds a todo', ()=> {
    cy.log('**adding a todo**')

  })


  it('contains the correct number of todos', () => {
    const todos = [
      { id: 1, content: 'Buy milk' },
      { id: 2, content: 'Learn Component Testing' }
    ]

    mount(<TodoList todo={todos} />)

    cy.get('.todo').should('have.length', todos.length)
  })


})




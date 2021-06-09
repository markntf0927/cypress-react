// import { render, screen } from '@testing-library/react'
// import App from '../App'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

import React from 'react'
import { mount } from '@cypress/react'
import App from '../App'


//* helper funcs
const mounts = (desc, cb) => {
  it(desc, () => {
    mount(<App />)
    cb()
  })
}

describe('Tests <App/>', () => {
  mounts('renders learn react link', ()=> {
    cy.get('a').contains('Learn React')
  })

  mounts('expects toggle button is false', ()=> {
    cy.get('div.toggle-status').contains('false')
  })

  mounts('clicks toggle button to true', ()=> {
    cy.get('div.toggle-status').contains('false')
    cy.get('button.toggle-btn').click()
    cy.get('div.toggle-status').contains('true')
  })

  mounts('clicks toggle button for 20 times', () => {
    for (let idx = 0; idx < 20; idx++) {
      cy.get('div.toggle-status').contains('false')

      cy.get('button.toggle-btn').click()
      cy.get('div.toggle-status').contains('true')

      cy.get('button.toggle-btn').click()
      cy.get('div.toggle-status').contains('false')
    }
  })
})




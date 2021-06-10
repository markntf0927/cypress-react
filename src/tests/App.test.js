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




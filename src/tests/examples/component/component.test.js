import React from 'react'
import { mount } from '@cypress/react'
import Chance from 'chance'

import Parent from './parent'
import * as Child from './child'

const chance = new Chance()

describe('tests import child component', () => {
  const MockChild = ({ data }) => {
    return (
      <section>
        <h5>This is Child Component</h5>

        <div>data @child:</div>
        <p data-cy="child-data">{data}</p>
      </section>
    )
  }

  it('imports original child component', () => {
    const text = 'test-text'
    const data = 'test-data'

    mount(<Parent text={text} data={data} />)

    cy.contains('[data-cy="child-data"]', data).should('be.visible')
  })

  it('imports mock child component', () => {
    cy.stub(Child, 'default').callsFake(MockChild)

    const data = 'mock2'

    mount(<Parent text={chance.paragraph()} data={data} />)

    cy.contains('[data-cy="child-data"]', data).should('be.visible')
  })
})

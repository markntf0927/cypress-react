/// <reference types="cypress" />

describe('Tests api calls', () => {
  it('Tests GET Request', () => {
    const resProperty = ['userId', 'id', 'title', 'completed']

    cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/1').then(
      (res) => {
        // console.log(res)

        for (const prop of resProperty) {
          expect(res.body).to.have.property(prop)
        }
        expect(res.status).to.match(/^20[0-9]/)
      }
    )
  })

  it('Tests POST Request', () => {
    const resProperty = ['id', 'content']

    const data = {
      id: 1,
      content: 'test content 1',
    }

    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', data).then(
      (res) => {
        // console.log(res)

        for (const prop of resProperty) {
          expect(res.body).to.have.property(prop)
        }

        expect(res.status).to.match(/^20[0-9]/)
      }
    )
  })
})

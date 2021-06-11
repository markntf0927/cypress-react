# Api with Axios Call Unit Test

1. Element Identifier

- add ```data-cy``` in component as identifier

  (not recommended to use ***class***, it may be changed in DOM)


2. Mock function with Axios

- use ```cy.stub()``` to mock function with axios that used in component

  ``` bash
  #example

  # require axios Class
  const Axios = require('axios')

  # apply Axios & set method name to mock axios method

  # .resolves() -> fill mock data

  # .as() -> give a nickname to the function for further use in unit test

  const data = [
    {...},
    {...},
  ]

  # will override original fetch function 
  cy.stub(Axios, 'get').resolves({ data }).as('get')

  # mount component
  mount(<Posts />)

  # check returned data from mock axios request
  cy.get(post).should('have.length', 2)

  # mock axios function called
  cy.get('@get').should('have.been.called')

  ```
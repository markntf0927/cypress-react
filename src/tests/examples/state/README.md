# State Component Unit Test

1. Element Identifier

- add ```data-cy``` in component as identifier

  (not recommended to use ***class***, it may be changed in DOM)

2. Event Listener

- use ```cy.stub()``` to mock functions that used in component

  ``` bash
  #example
  
  const stub = cy.stub().as('handleClick')

  # .as() -> give a nickname to the function for further use in unit test

  it('alerts with click message', () => {
    cy.get('[data-cy="stateless-btn"]').click()
    cy.get('@handleClick').should('have.been.calledOnce')
  })

  ```
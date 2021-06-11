# Mock Component Unit Test

1. Element Identifier

- add ```data-cy``` in component as identifier

  (not recommended to use ***class***, it may be changed in DOM)


2. Mock a component

- use ```cy.stub()``` to mock a dummy component to test

  ``` bash
  #example

  # import <Child /> compoent to mock a component

  import * as Child from './child'

  cy.stub(Child, 'default').callsFake(MockChild)

  # 'default' -> this option is to get all stuff from original component

  # .callsFake() -> method to mock component

  # MockChild -> apply your dummy component to test

  ```
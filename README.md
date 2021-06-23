# Cypress Test with React

## Features
  1. jQuery-like way to write a test
  2. built-in assertion libraries (mocha, jest)
  3. automatically snapshot (images & videos) when got errors

## Common api
  - cy.contains()
  - cy.get()
  - cy.contains()
  - .should()

## Best Practice
  - recommand to use data attribute to get element [Read more](https://docs.cypress.io/guides/references/best-practices)
  - recommand to use *.should()* instead of *expect()*

## Test Types
### 1. Unit Test (Component Test)

  - Install Cypress-related packages
      ``` bash
      yarn add cypress @cypress/react @cypress/webpack-dev-server @cypress/instrument-cra --dev
      ```

  - Create *cypress.json*
      ``` bash
      # cypress.json

      {
        # set baseUrl
        "baseUrl": "http://localhost:9000",
        # set test files folder & file extension
        "component": {
          "testFiles": "**/*.test.{js,ts,jsx,tsx}",
          "componentFolder": "src"
        }
      }
      ```

  - Update *cypress/plugins/index.js* for running in the app with Webpack Dev Server
      ``` bash
      # cypress/plugins/index.js

      const injectDevServer = require("@cypress/react/plugins/react-scripts")

      module.exports = (on, config) => {
        injectDevServer(on, config)
        return config
      }
      ```

    [Read more](https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/) about Cypress Unit Test with React.

### 2. End-to-End Test
  - Install Cypress-related packages
    ``` bash
    yarn add cypress --dev
    ```

- Create *cypress.json*
    ``` bash
    # cypress.json

    {
      # set baseUrl
      "baseUrl": "http://localhost:9000",
    }
    ```


## Limitation (between end-to-end & unit test)
### 1. File location
    ``` bash
    end-to-end test: 
    
    - file must be named like xxx.spec.js
    - file locates in /cypress/integration

    ====

    unit test: 

    - file naming convention is changable like:
      xxx.spec.js OR xxx.test.js
    
    - file can locate anywhere

    [Remark: as long as you config setting in cypress.json]
    ```

### 2. Command script
    ``` bash
    end-to-end test: 
    
    - run test with browser
    $ yarn cypress open

    - run test in shell
    $ yarn cypress run

    ====

    unit test: 

    - run test with browser
    $ yarn cypress open-ct

    - run test in shell
    $ yarn cypress run-ct
    ```

  Click [here](https://docs.cypress.io/guides/guides/command-line#How-to-run-commands) to read more guides for cypress commands.

### 3. api
    ``` bash
    end-to-end test: 
    
    - cannot mount component in the test
    
    - can use cy.visit() to direct page

    ====

    unit test: 

    - cannot use cy.visit() with component test
    - use *mount* to render component

    import { mount } from '@cypress/react'

    ```

## Scripts

### `yarn cypress:open`
Runs Cypress with visual views in browser

### `yarn cypress:run`
Runs Cypress in shell

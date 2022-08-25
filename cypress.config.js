const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 
    ['cypress/integration/examples/*','cypress/integration/Framework/*',
'cypress/integration/Greenkart/*','cypress/integration/examples/BDD/*.feature'],
    defaultCommandTimeout: 6000,
    env:{
      url: "https://rahulshettyacademy.com"
    },
    retries: {
      runMode: 1
    },

  },
  projectId: "fr85bz"
});

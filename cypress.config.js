const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx}",
    supportFile: false,
    viewportWidth: 2000
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

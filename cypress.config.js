const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adicionando o preprocessor do Cucumber
      on('file:preprocessor', cucumber());

      // Configurações adicionais aqui, se necessário
    },
    specPattern: 'cypress/integration/features/**/*.feature',
    supportFile: 'cypress/support/index.js',
    baseUrl: 'https://automationexercise.com/',
    browser: 'chrome',
    chromeWebSecurity: false,
  },
  browsers: [
    {
      name: 'chrome',
      family: 'chromium',
      channel: 'stable',
      displayName: 'Chrome',
      majorVersion: '125',
      version: '125.0.6422.142',
      path: 'C:\\Users\\artme\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'
    }
  ]
});

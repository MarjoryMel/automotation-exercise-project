const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configurações adicionais aqui, se necessário
    },
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

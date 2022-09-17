const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: 'w2ve2e',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://beta.coodesh.com',
    experimentalSessionAndOrigin: true,
    experimentalStudio: true
  },
})
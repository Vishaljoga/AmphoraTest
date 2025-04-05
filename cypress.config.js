const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Add Cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Add esbuild bundler for preprocessor
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },

    // ✅ Important: Path to your step definitions
    specPattern: [
      'cypress/e2e/UI/features/*.feature',
      'cypress/e2e/api/features/*.feature'
    ],
    supportFile: false,
    env: {
      stepDefinitions: 'cypress/e2e/step_definitions/**/*.js',
    },
  },
});

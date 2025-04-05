
const { defineConfig } = require('cypress'); 
module.exports = defineConfig({
  stepDefinitions: ["cypress/e2e/step_definitions/**/*.{js,ts}"],
});

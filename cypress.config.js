const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://asinhonore-mern-e-commerce-app-remote.netlify.app",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    watchForFileChanges: false,
    viewportHeight: 1000,
    viewportWidth: 1500

});
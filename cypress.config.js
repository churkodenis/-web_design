const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Эта настройка верна и это всё, что вам сейчас нужно
    baseUrl: "http://localhost:5173",

    // Также добавляем строку, чтобы исправить предыдущую ошибку с supportFile
    supportFile: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});

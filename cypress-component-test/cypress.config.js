const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: require("./webpack.config.js"),
    },
  },
});

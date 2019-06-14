const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require("craco-less");
module.exports = { plugins: [ { plugin: CracoLessPlugin, options: { lessLoaderOptions: { modifyVars: { "@primary-color": "#1DA57A", "@link-color": "#1DA57A", "@border-radius-base": "2px" }, javascriptEnabled: true } } } ] };

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin
    },
    {
      plugin: CracoLessPlugin
    }
  ],
  jest: {
    configure: {
      "moduleNameMapper": {
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
      }
    }
  },
  devServer: {
    disableHostCheck: true
  }
};

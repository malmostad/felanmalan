const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require("craco-less");
const vars = require("postcss-simple-vars");
module.exports = {
  style: {
    postcss: {
      plugins: [
        vars({
          variables: function() {
            return require("./src/GlobalStyles");
          }
        })
      ]
    }
  },
  webpack: {
    plugins: [new BundleAnalyzerPlugin()]
  },
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

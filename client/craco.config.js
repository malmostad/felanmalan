const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require("craco-less");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const vars = require("postcss-simple-vars");
let webpackConfig = {};
const IS_CORDOVA = process.env.REACT_APP_IS_CORDOVA === "true";
if (IS_CORDOVA) {
  webpackConfig = {
    configure: {
      output: {
        publicPath: "./",
        path: __dirname + "/../cordova-felanmalan/www/"
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "cordova/index.html"
      })
    ]
  };
}
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
  webpack: webpackConfig,
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
      moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
      }
    }
  },
  devServer: {
    disableHostCheck: true
  }
};

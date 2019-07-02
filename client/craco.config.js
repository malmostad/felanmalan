const path = require("path");
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
    configure: {
      resolve: {
        alias: {
          '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js')
        }
      }
    },
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
      moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
      }
    }
  },
  devServer: {
    disableHostCheck: true
  }
};

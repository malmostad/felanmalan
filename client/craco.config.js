const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require("craco-less");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const vars = require("postcss-simple-vars");

let webpackConfig = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled",
      generateStatsFile: process.env.CREATE_STATS === "true",
      statsOptions: { source: false }
    })
  ],
  configure: {
    resolve: {
      alias: {
        "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
      }
    }
  }
};

const IS_CORDOVA = process.env.REACT_APP_IS_CORDOVA === "true";
if (IS_CORDOVA) {
  webpackConfig = {
    configure: {
      ...webpackConfig.configure,
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

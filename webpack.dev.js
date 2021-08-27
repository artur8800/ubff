const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const path = require("path");

// const HotModuleReplacementPlugin = require("HotModuleReplacementPlugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),

  },
  target: 'web',
  devServer: {
    watchFiles: ['src/*'],

    //contentBase: path.join(__dirname, "dist"),
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: false,

      },
    },

    liveReload: true,
    hot: false
  }
});
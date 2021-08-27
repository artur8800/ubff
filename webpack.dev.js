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
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    overlay: {
      warnings: true,
      errors: true
    },
    liveReload: true,
    hot: true,

    watchOptions: {
      poll: true,
      ignored: "/node_modules/"
    }
  }
});

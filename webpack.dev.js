const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),

  },
  target: 'web',
  devServer: {
    watchFiles: ['src/*'],
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: false,

      },
    },

    liveReload: true,
    hot: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "news.html",
      chunks: ["news"],
      template: "src/templates/news.html",

      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["index"],
      template: "src/templates/index.html",
      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      chunks: ["about"],
      template: "src/templates/about.html",

      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "team.html",
      chunks: ["team"],
      template: "src/templates/team.html",

      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "gallery.html",
      chunks: ["gallery"],
      template: "src/templates/gallery.html",

      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "team_member.html",
      chunks: ["team_member"],
      template: "src/templates/team_member.html",

      inject: "body"
    }),
    new HtmlWebpackPlugin({
      filename: "news_item.html",
      chunks: ["news_item"],
      template: "src/templates/news_item.html",

      inject: "body"
    }),

  ]

});
const glob = require("glob");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const PATHS = {
  src: path.join(__dirname, "src")
};

module.exports = merge(common, {
  mode: "production",

  plugins: [
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          ["svgo"]
        ]
      }
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),


  ]
});
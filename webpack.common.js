const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const folderPath = path.resolve(__dirname, "./src/templates/");

module.exports = {
  entry: {

    index: "./src/script/index.js",
    news: "./src/script/news.js",
    print: "./src/script/print.js",
    about: "./src/script/about.js",
    team: "./src/script/team.js",
    news_item: "./src/script/news_item.js",
    team_member: "./src/script/team_member.js",
    gallery: "./src/script/gallery.js",
  },
  output: {
    filename: "script/[name].js",
    chunkFilename: "script/[name]/[name].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {

      cacheGroups: {
        common: {
          name: "common",
          filename: "script/[name]/[name].[chunkhash:8].js",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          //  minSize: 0
        }
      }
    }
  },
  module: {
    rules: [{
        test: /\.js$/,

        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sass|scss|css)$/i,

        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production" ?
          "style-loader" :
          MiniCssExtractPlugin.loader,
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
              publicPath: "../"
            }
          },

          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.gif$/i,
        loader: "file-loader",
        options: {
          name: "[name].[contenthash].[ext]",
          outputPath: "img"
        }
      },
      {
        test: /\.jpg$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]"
        }
      },
      {
        test: /\.(svg|png)$/,
        type: "asset/inline"
      },

      {
        test: /\.html$/,
        loader: "html-loader",

      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts"
          }
        }]
      }
    ]
  },

  plugins: [

    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new webpack.ProgressPlugin(),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new AssetsPlugin({
      removeFullPathAutoPrefix: true,
      entrypoints: true,
      includeFilesWithoutChunk: false,
      prettyPrint: true,
      path: path.join(__dirname, "dist"),
      filename: "assets.json"
    })
  ]
};
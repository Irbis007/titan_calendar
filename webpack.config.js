const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'
const target = devMode ? 'web' : "browserslist"
const devtool = devMode ? 'source-map' : undefined

module.exports = {
  mode: mode,
  target: target,
  devtool: devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext]'
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html')
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css"
  })
],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        use: [
         devMode ? "style-loader" : MiniCssExtractPlugin.loader, 
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')]
              }
            }
          }
        ],
      },
      {
        test: /\.(ttf, woff, woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name]-[hash].[ext]'
        }
      }
    ]
  }
};
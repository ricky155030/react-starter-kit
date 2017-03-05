var webpack = require('webpack')
var loaders = require('./webpack.loaders')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";

const indexTemplate = new htmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  links: [
    'https://fonts.googleapis.com/css?family=Roboto'
  ],
  scripts: [
    'public/js/handsontable.full.js'
  ]
})

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    __dirname + '/app/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/bundle.js'
  },
  module: {
    loaders
  },
  devServer: {
    contentBase: "./public",
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    indexTemplate
  ]
}

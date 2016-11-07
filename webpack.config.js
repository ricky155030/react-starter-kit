'use strict';

var webpack = require('webpack')
var path = require('path')
var loaders = require('./webpack.loaders')
var htmlWebpackPlugin = require('html-webpack-plugin')

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";

const indexTemplate = new htmlWebpackPlugin({
  template: 'app/index.html',
  title: 'React starter kit',
  scripts: [],
  links: []
})

module.exports = {
  devtool: 'eval',
  entry: [
    path.join(__dirname, 'app/js/index.js')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:3000/',
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
		host: HOST,
		watchOptions: {
      poll: true
		}
  },
  plugins: [
    indexTemplate,
    new webpack.HotModuleReplacementPlugin()
  ]
}

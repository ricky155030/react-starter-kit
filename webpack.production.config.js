'use strict';

var webpack = require('webpack')
var path = require('path')
var loaders = require('./webpack.loaders')
var htmlWebpackPlugin = require('html-webpack-plugin')
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";

const indexTemplate = new htmlWebpackPlugin({
  template: 'app/index.html',
  title: 'React starter kit',
  scripts: [],
  links: []
})

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'app/js/index.js')
  ],
  output: {
    filename: 'js/bundle.js'
    path: path.join(__dirname, 'public'),
    publicPath: '/',
  },
  module: loaders,
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    indexTemplate,
  ]
}

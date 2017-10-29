var webpack = require('webpack')
var loaders = require('./webpack.loaders')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

var {
  projectName
} = require('./config')

const indexTemplate = new htmlWebpackPlugin({
  alwaysWriteToDisk: true,
  filename: 'index.html',
  title: `${projectName}`,
  template: __dirname + '/app/index.html',
  links: [
    'https://fonts.googleapis.com/css?family=Roboto'
  ],
  scripts: []
})

module.exports = {
  entry: {
    bundle: './app/js/index.js'
  },
  output: {
    publicPath: '/js/',
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: loaders,
  resolve: {
    modules: [
      "./app/js",
      "node_modules"
    ]
  },
  plugins: [
    indexTemplate,
    new HtmlWebpackHarddiskPlugin(),
    new WebpackCleanupPlugin()
  ]
}

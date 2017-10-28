var webpack = require('webpack')
var loaders = require('./webpack.loaders')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";

const indexTemplate = new htmlWebpackPlugin({
  alwaysWriteToDisk: true,
  filename: 'index.html',
  template: __dirname + '/app/index.html',
  links: [
    'https://fonts.googleapis.com/css?family=Roboto'
  ],
  scripts: []
})

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './app/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/js/'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    contentBase: "./public",
    noInfo: false,
    hot: true,
    inline: true,
    overlay: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  }
}

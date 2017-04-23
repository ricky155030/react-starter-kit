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
  scripts: []
})

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    __dirname + '/app/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  module: loaders,
  plugins: [
    indexTemplate,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    contentBase: "./public",
    noInfo: true,
    hot: true,
    inline: true,
    overlay: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  }
}

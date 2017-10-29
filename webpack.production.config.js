var webpack = require('webpack')
var common = require('./webpack.config')

const prodConfig = {
  ...common,
  devtool: 'source-map',
}

prodConfig.plugins = [
  ...prodConfig.plugins,
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
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
]

module.exports = prodConfig

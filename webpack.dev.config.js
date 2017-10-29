var webpack = require('webpack')
var common = require('./webpack.config')

const {
  devPort,
  devHost
} = require('./config')

const HOST = devHost || "127.0.0.1";
const PORT = devPort || "3000";

const devConfig = {
  ...common,
  devtool: 'inline-source-map',
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

devConfig.plugins = [
  ...devConfig.plugins,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    }
  })
]

module.exports = devConfig

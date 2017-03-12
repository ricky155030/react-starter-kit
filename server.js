'use strict';

var app = require('express')();
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

const isDeveloping = process.env.NODE_ENV != 'production'
const compiler = webpack(config)
const devMiddlewareConfig = {
  publicPath: config.output.publicPath,
  contentBase: 'app',
  stats: {
    // Config for minimal console.log mess.
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}

if(isDeveloping) {
  const middleware = webpackDevMiddleware(compiler, devMiddlewareConfig)
  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/public'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
}

app.listen(3000, 'localhost', function (err) {
  if (err) {
      console.log(err);
  }

  console.log('Listening at localhost:3000');
});

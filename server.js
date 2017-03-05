'use strict';

var path = require('path');
var webpack = require('webpack');
var express = require('express');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

new webpackDevServer(compiler, {
  hot: true,
  stats: { colors: true },
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
}).listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});

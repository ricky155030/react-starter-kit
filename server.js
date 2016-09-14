'use strict';

var express = require('express');
var path = require('path');
var rewrite = require('express-urlrewrite');
var bodyParser = require('body-parser');
var app = express();

var CONFIG = require('./config')

app.set('port', (process.env.PORT || CONFIG.PORT));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static(path.join(__dirname, 'public')));

/* Code start */

/*  Code end  */

app.use(rewrite('/*', '/'));
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('Server started: http://' + CONFIG.HOSTNAME + ':' + app.get('port') + '/');
});


/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('express-error-handler'),
  morgan = require('morgan'),
  http = require('http'),
  app = module.exports = express(),
  path = require('path'),
  // API
  users = require('./api/users'),
  products = require('./api/products'),
  admin = require('./api/admin'),
  index = require('./api/products'),
  sales = require('./api/sales');

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended : true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}

/**
 * Routes
 */

// serve index and view partials
app.use('/',index);
// Users Json API
app.use('/api/users',users);
// Products Json API
app.use('/api/products', products);
// Admin Json API
app.use('/api/admin', admin);
// Sales Json API
app.use('/api/sales', sales);
/**
 * Start Server
 */
app.all('port');
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
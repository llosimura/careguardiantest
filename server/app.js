/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var bookshelf = require('bookshelf');
var path = require('path')
var config = require('./config/environment');

//Setup bookshelf ORM
var db = bookshelf.initialize({client: 'sqlite3', connection: {filename: config.dbFile} });
bookshelf.db = db;

// Load application models
require('./models');

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;

/**
 * Created by alfonso on 11/12/14.
 */
var path = require('path'),
  fs = require('fs'),
  Bookshelf = require('bookshelf').db,
  _ = require('lodash');

Bookshelf.models = {};

// Bootstrap models
var modelsPath = path.join(__dirname, './');
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file !== 'index.js') {
    require(modelsPath + '/' + file);
  }
});

/**
 * Created by alfonso on 11/12/14.
 */
var path = require('path');
var fs = require('fs');
var Bookshelf = require('bookshelf').db;
var _ = require('lodash');

Bookshelf.models = {};

/**
 *  We use the index to load al the models needed by the application automatically
 *  With that we avoid an overuse of require.
 */
var modelsPath = path.join(__dirname, './');
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file !== 'index.js') {
    require(modelsPath + '/' + file);
  }
});

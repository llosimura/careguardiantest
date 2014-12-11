/**
 * Created by alfonso on 11/12/14.
 */
var path = require('path'),
  fs = require('fs');

/**
 *  We use the index to load al the controllers needed by the application automatically
 *  With that we avoid an overuse of require.
 */
var controllers = {};
var controllersPath = path.join(__dirname, './');
fs.readdirSync(controllersPath).forEach(function (file) {
  if (file !== 'index.js' && file !== 'base-controller.js') {
    var controller = require(controllersPath + '/' + file);
    var name = file.substring(0, file.indexOf('-'));
    controllers[name] = new controller();
  }
});

module.exports = controllers;

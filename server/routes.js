/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var controllers = require('./controllers');

module.exports = function(app) {

  //Users
  app.get('/api/users',controllers.users.index);
  app.get('/api/users/:id', controllers.users.get);
  app.post('/api/users', controllers.users.add);
  app.put('/api/users/:id', controllers.users.edit);
  app.delete('/api/users/:id', controllers.users.delete);

  // Insert routes below
  //app.use('/api/things', require('./api/thing'));

  // All undefined asset or api routes should return a 404
  //app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  // .get(errors[404]);

  // All other routes should redirect to the index.html
  //app.route('/*')
  //  .get(function(req, res) {
  //    res.sendfile(app.get('appPath') + '/index.html');
  //  });
};

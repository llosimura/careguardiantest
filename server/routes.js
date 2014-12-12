/**
 * Main application routes
 */

'use strict';
var _ = require('lodash');
var controllers = require('./controllers');

module.exports = function(app) {

  //Users
  app.get('/api/users',controllers.users.index);
  app.get('/api/users/:id', controllers.users.get);
  app.post('/api/users', controllers.users.add);
  app.put('/api/users/:id', controllers.users.edit);
  app.delete('/api/users/:id', controllers.users.delete);

  //Caregivers
  app.get('/api/caregivers',controllers.caregivers.index);
  app.get('/api/caregivers/:id', controllers.caregivers.get);
  app.post('/api/caregivers', controllers.caregivers.add);
  app.put('/api/caregivers/:id', controllers.caregivers.edit);
  app.delete('/api/caregivers/:id', controllers.caregivers.delete);

  //All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
  });

  /**
   * Capturing all errors produced by the application
   */
  app.use(function(err, req, res, next) {
    res.json(err.get('status'), _.omit(err.toJSON(),['id','created_at','updated_at']));
  });
};

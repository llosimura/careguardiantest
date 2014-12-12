/**
 * Created by alfonso on 11/12/14.
 */
var Bookshelf = require('bookshelf').db;
var _ = require('lodash');
var Promise = require('bluebird');

/**
 * We extend the user from the BaseModel
 */
var Service = Bookshelf.models.BaseModel.Model.extend({
  tableName: 'services'
  //TODO relations between tables should be done here if necessary
});

var Services = Bookshelf.Collection.extend({
  model: Service
});

Bookshelf.models.Service = {
  Model: Service,
  Collection: Services
};

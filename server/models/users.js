/**
 * Created by alfonso on 11/12/14.
 */
var Bookshelf = require('bookshelf').db;
var _ = require('lodash');
var Promise = require('bluebird');

/**
 * We extend the user from the BaseModel
 */
var User = Bookshelf.models.BaseModel.Model.extend({
  tableName: 'users'
  //TODO relations between tables should be done here if necessary
});

var Users = Bookshelf.Collection.extend({
  model: User
});

Bookshelf.models.User = {
  Model: User,
  Collection: Users
};

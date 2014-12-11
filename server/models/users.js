/**
 * Created by alfonso on 11/12/14.
 */
var Bookshelf = require('bookshelf').db,
  _ = require('lodash'),
  Promise = require('bluebird');

var User = Bookshelf.models.BaseModel.Model.extend({
  tableName: 'users'
});

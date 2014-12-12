/**
 * Created by alfonso on 11/12/14.
 */
var Bookshelf = require('bookshelf').db;
var _ = require('lodash');
var Promise = require('bluebird');

/**
 * We extend the user from the BaseModel
 */
var Caregiver = Bookshelf.models.BaseModel.Model.extend({
  tableName: 'caregivers'
  //TODO relations between tables should be done here if necessary
});

var Caregivers = Bookshelf.Collection.extend({
  model: Caregiver
});

Bookshelf.models.Caregiver = {
  Model: Caregiver,
  Collection: Caregivers
};

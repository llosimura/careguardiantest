var Bookshelf = require('bookshelf').db;

/**
 * We extend error from the model
 */
var Error = Bookshelf.Model.extend({
  tableName: 'errors',
  hasTimestamps: ['created_at', 'updated_at']
});

/**
 * We extend the collection using our model
 */
var Errors = Bookshelf.Collection.extend({
  model: Error
});

/**
 * Appen our recently generate model and collection to Bookshelf Model
 * @type {{Model: *, Collection: *}}
 */
Bookshelf.models.Error = {
  Model: Error,
  Collection: Errors
};

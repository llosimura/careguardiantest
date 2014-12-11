var Bookshelf = require('bookshelf').db;

/**
 *  We generate an empty model that will be the base for
 *  all the models generated in the future.
 */
var BaseModel = Bookshelf.Model.extend({
  initialize: function() {
    BaseModel.__super__.initialize.apply(this, arguments);
  }
});

/**
 *  We generate a Base colection which will extend from the
 *  Bookshelf colletion and with the model BaseModel
 */
var BaseCollection = Bookshelf.Collection.extend({
  model: BaseModel
});

/**
 * We append the previously generated models and collection to the bookshelf
 * models order to user them in the future
 * @type {{Model: *, Collection: *}}
 */
Bookshelf.models.BaseModel = {
  Model: BaseModel,
  Collection: BaseCollection
};

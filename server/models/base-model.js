var Bookshelf = require('bookshelf').db

var BaseModel = Bookshelf.Model.extend({
  initialize: function() {
    BaseModel.__super__.initialize.apply(this, arguments);
  }
});

var BaseCollection = Bookshelf.Collection.extend({
  model: BaseModel
});

Bookshelf.models.BaseModel = {
  Model: BaseModel,
  Collection: BaseCollection
};

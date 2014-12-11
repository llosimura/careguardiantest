/**
 * Created by alfonso on 11/12/14.
 */
var Bookshelf = require('bookshelf').db;
var _ = require('lodash');
var Promise = require('bluebird');
var url = require('url');
module.exports = (function () {

  /**
   * We create a base controller that implements the basic CRUD opertations
   * Also we create a funcion that indexes all result and a method that handles
   * errors
   * @constructor
   */
  function BaseController() {
    this.index = _.bind(this.index, this);
    this.get = _.bind(this.get, this);
    this.add = _.bind(this.add, this);
    this.edit = _.bind(this.edit, this);
    this.delete = _.bind(this.delete, this);
  }

  /**
   * Base controller index, forges a collecion (given by the extended controller) and
   * fetchs it returning its value as a JSON
   * @param req
   * @param res
   * @param next
   */
  BaseController.prototype.index = function (req, res, next) {
    var _this = this;
    this.collection.forge()
      .query(function (qb) {
        qb.where(1, '=', 1)
      })
      .fetch()
      .then(function (data) {
        res.json(data.toJSON());
      })
      .catch(function (err) {
        //TODO work with error
        res.json(err.toJSON());
      });
  };

  /**
   * Base controller get obtains a model given its id.
   * @param req
   * @param res
   * @param next
   */
  BaseController.prototype.get = function (req,res, next){
    var _this = this;
    this.model.forge({id: req.params.id})
      .fetch()
      .then(function(data) {
        res.json(data.toJSON());
      })
      .catch( function(err){
        //TODO work with error
        res.json(err.toJSON());
      });
  };

  /**
   * Base Controller add, creates a new entity of a given model on the DB
   * @param req
   * @param res
   * @param next
   */
  BaseController.prototype.add = function (req, res, next) {
    var _this = this;
    this.model.forge(req.body)
      .save()
      .then(function(data) {
        res.json(data.toJSON());
      })
      .catch( function(err){
        //TODO work with error
        res.json(err.toJSON());
    });
  };

  /**
   * Base Controller edit, updates a new entity of a given model on the DB
   * it uses patch true to update the model when saving it.
   * @param req
   * @param res
   * @param next
   */
  BaseController.prototype.edit = function (req, res, next) {
    var _this = this;
    this.model.forge({id: req.params.id})
      .save(req.body, {patch: true})
      .then(function(data) {
        res.json(data.toJSON());
      })
      .catch( function(err){
        //TODO work with error
        res.json(err.toJSON());
    });
  };

  /**
   * Base Controller delete, removes an entity from the DB given its id
   * @param req
   * @param res
   * @param next
   */
  BaseController.prototype.delete = function (req, res, next) {
    var _this = this;
    this.model.forge({id: req.params.id})
      .destroy()
      .then(function(data) {
        res.json(data.toJSON());
      })
      .catch( function(err){
        //TODO work with error
        res.json(err.toJSON());
      });
  };

})();

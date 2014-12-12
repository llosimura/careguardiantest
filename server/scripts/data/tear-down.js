process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var Knex = require('knex');
var _ = require('lodash');
var Promise = require('bluebird');
var config = require('../../config/environment');


/**
 * Initialize knex
 */
var knex = Knex.initialize({
  client: 'sqlite3',
  connection: {filename: config.dbFile}
});

// All script are run in a transaction
knex.transaction(function(t) {
    return Promise.all(_.map(['errors','users'], function(table){
            return knex(table).transacting(t).where(1,1).del();
        })
    ).then(t.commit, t.rollback);
}).then(function() {
        console.log("Database cleared successfully");
    },
    function(e){
        console.error("Error clearing database");
    }).finally(function() {
        // Close database session after all
        knex.destroy();
  });

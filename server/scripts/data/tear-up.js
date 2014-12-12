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
    Promise.all([
        insertErrors(t),
    ]).then(t.commit, t.rollback)
      .then(function(){
        console.log("Database created successfully");
    }, function(e){
        console.log(e);
        console.log("Error creating database");
    });

}).catch(function(error) {
        console.error(error);
}).finally(function(){
    knex.destroy();
});

//Function to insert errors
var insertErrors = function(t){
    return knex('errors').transacting(t).insert([
        {code: 4001, status: 400, message: "Bad request", created_at: new Date(), updated_at: new Date()},
        {code: 4011, status: 401, message: "Unauthorized", created_at: new Date(), updated_at: new Date()},
        {code: 4041, status: 404, message: "Element was not found", created_at: new Date(), updated_at: new Date()},
        {code: 5001, status: 500, message: "An internal error has occurred", created_at: new Date(), updated_at: new Date()}
    ]);
};

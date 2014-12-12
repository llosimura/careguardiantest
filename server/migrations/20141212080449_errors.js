'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('errors', function(table) {
    table.increments('id').primary();
    table.integer("code").unsigned().notNullable();
    table.integer("status").unsigned().notNullable();
    table.string("message", 255).notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('errors');
};

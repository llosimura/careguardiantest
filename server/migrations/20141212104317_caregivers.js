'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('caregivers', function(table) {
    table.increments('id').primary();
    table.string('Name', 255).notNullable();
    table.string('Surname', 255).notNullable();
    table.integer("age").unsigned().notNullable();
    table.integer("available").unsigned().notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('caregivers');
};

'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('services', function(table) {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.string('description', 1023).notNullable();
    table.integer("someField").unsigned().notNullable();
    table.integer("otherField").unsigned().notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('caregivers');
};

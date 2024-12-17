// migrations/202401010002_create_sin_jcx_tables.js

exports.up = function(knex) {
  return knex.schema
    .createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username').notNullable().unique();
      table.string('email').notNullable().unique();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('tokens', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.string('token_type').notNullable();
      table.decimal('balance', 18, 8).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tokens')
    .dropTableIfExists('users');
};

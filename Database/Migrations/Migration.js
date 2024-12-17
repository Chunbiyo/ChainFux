// migrations/202401010001_create_unbnkd_wallet_tables.js

exports.up = function(knex) {
  return knex.schema
    .createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username').notNullable().unique();
      table.string('email').notNullable().unique();
      table.string('password_hash').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('transactions', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.string('transaction_id').notNullable().unique();
      table.decimal('amount', 18, 8).notNullable();
      table.string('currency').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('transactions')
    .dropTableIfExists('users');
};

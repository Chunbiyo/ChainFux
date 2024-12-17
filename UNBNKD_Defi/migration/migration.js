// migrations/202401010003_create_ethfuse_defi_tables.js

exports.up = function(knex) {
  return knex.schema
    .createTable('vaults', function(table) {
      table.increments('id').primary();
      table.string('vault_name').notNullable();
      table.decimal('total_staked', 18, 8).defaultTo(0);
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('transactions', function(table) {
      table.increments('id').primary();
      table.integer('vault_id').unsigned().references('id').inTable('vaults').onDelete('CASCADE');
      table.string('transaction_id').notNullable().unique();
      table.decimal('amount', 18, 8).notNullable();
      table.string('transaction_type').notNullable(); // 'stake', 'unstake', etc.
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('transactions')
    .dropTableIfExists('vaults');
};

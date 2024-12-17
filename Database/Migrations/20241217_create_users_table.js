exports.up = function (knex) {
  return knex.schema.createTable('tracks', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('name').notNullable();
    table.string('account_type');
    table.integer('verified'); // in keytum
    table.timestamps(true, true); // created_at and updated_at
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('form');
};

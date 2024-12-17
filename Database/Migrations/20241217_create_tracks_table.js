exports.up = function (knex) {
  return knex.schema.createTable('tracks', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('artist').notNullable();
    table.string('genre');
    table.integer('duration'); // in seconds
    table.timestamps(true, true); // created_at and updated_at
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tracks');
};

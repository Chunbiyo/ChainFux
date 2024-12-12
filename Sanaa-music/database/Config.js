const knex = require('knex');
require('dotenv').config();

const db = knex({
  client: 'pg', // Use 'mysql' for MySQL, 'sqlite3' for SQLite
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'your_username',
    password: process.env.DB_PASSWORD || 'your_password',
    database: process.env.DB_NAME_SANAA || 'sanaa_music',
  },
  migrations: {
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
});

module.exports = db;

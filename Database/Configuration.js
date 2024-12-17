// unbnkd_wallet/config.js

const knex = require('knex');

const config = {
  client: 'pg', // Change to 'mysql' for MySQL or 'sqlite3' for SQLite
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'unbnkd_user',
    password: process.env.DB_PASSWORD || 'your_password',
    database: process.env.DB_NAME || 'unbnkd_wallet',
    port: process.env.DB_PORT || 5432, // Change if using MySQL or SQLite
    ssl: process.env.DB_SSL || false // Set to true for secure connections, if necessary
  },
  pool: {
    min: 2,
    max: 10
  }
};

// Initialize Knex with the configuration
const db = knex(config);

// Export for use in other files
module.exports = db;

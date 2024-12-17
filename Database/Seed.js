// seeds/202401010001_seed_unbnkd_wallet.js

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { username: 'alice', email: 'alice@example.com', password_hash: 'hashed_password' },
        { username: 'bob', email: 'bob@example.com', password_hash: 'hashed_password' }
      ]);
    });
};

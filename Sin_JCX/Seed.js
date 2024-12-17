// seeds/202401010002_seed_sin_jcx.js

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { username: 'charlie', email: 'charlie@example.com' },
        { username: 'david', email: 'david@example.com' }
      ]);
    })
    .then(function() {
      return knex('tokens').del();
    })
    .then(function() {
      return knex('tokens').insert([
        { user_id: 1, token_type: 'SIN', balance: 1000.00 },
        { user_id: 2, token_type: 'JCX', balance: 1500.00 }
      ]);
    });
};

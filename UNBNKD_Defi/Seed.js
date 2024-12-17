// seeds/202401010003_seed_ethfuse_defi.js

exports.seed = function(knex) {
  return knex('vaults').del()
    .then(function () {
      return knex('vaults').insert([
        { vault_name: 'DeFi Vault 1', total_staked: 5000.00 },
        { vault_name: 'DeFi Vault 2', total_staked: 10000.00 }
      ]);
    })
    .then(function() {
      return knex('transactions').del();
    })
    .then(function() {
      return knex('transactions').insert([
        { vault_id: 1, transaction_id: 'tx12345', amount: 500.00, transaction_type: 'stake' },
        { vault_id: 2, transaction_id: 'tx12346', amount: 1000.00, transaction_type: 'stake' }
      ]);
    });
};

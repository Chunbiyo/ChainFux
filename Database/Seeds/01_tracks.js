exports.seed = function (knex) {
  return knex('tracks').insert([
    { title: 'Track 1', artist: 'Artist A', genre: 'Pop', duration: 240 },
    { title: 'Track 2', artist: 'Artist B', genre: 'Rock', duration: 300 },
  ]);
};

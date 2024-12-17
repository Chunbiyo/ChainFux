const db = require('./config');

db.select('*')
  .from('tracks')
  .then((data) => {
    console.log('Database connected successfully:', data);
    db.destroy(); // Close the connection
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    db.destroy();
  });
node database/test.js

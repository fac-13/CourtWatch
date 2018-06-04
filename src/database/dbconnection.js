const mongoose = require('mongoose');

require('dotenv').config();

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error('Environment variable DATABASE_URL should be set');
}

// mongoose.Promise = global.Promise;

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.once('open', () => {
  console.log(db.states[db.readyState]);
});

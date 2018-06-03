const mongoose = require('mongoose');

require('dotenv').config();

let { DATABASE_URL } = process.env;

// if (process.env.TRAVIS === 'true') {
//   DATABASE_URL = 'cwdb_test';
// }

if (process.env.NODE_ENV === 'test') {
  DATABASE_URL = process.env.TEST_DATABASE_URL;
}

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL should be set');
}

module.exports = () => {
  mongoose.connect(DATABASE_URL);
};

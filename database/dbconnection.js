const mongoose = require('mongoose');

require('dotenv').config();

let DB_URL;

if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.TEST_DATABASE_URL;
} else {
  DB_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';
}

if (!DB_URL) {
  throw new Error('DATABASE_URL should be set');
}

module.exports = () => {
  mongoose.connect(DB_URL);
};

const mongoose = require('mongoose');

require('dotenv').config();

const dbConnection = () => {
  let { DATABASE_URL } = process.env;

  if (process.env.NODE_ENV === 'test') {
    DATABASE_URL = process.env.TEST_DATABASE_URL;
  }

  if (!DATABASE_URL) {
    throw new Error('Environment variable DATABASE_URL should be set');
  }

  mongoose.connect(DATABASE_URL);
};

module.exports = dbConnection;

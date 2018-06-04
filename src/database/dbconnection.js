const mongoose = require('mongoose');

require('dotenv').config();

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error('Environment variable DATABASE_URL should be set');
}

mongoose.connect(DATABASE_URL, () => { console.log('Connected to database!'); });


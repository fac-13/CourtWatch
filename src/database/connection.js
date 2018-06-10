const mongoose = require('mongoose');
require('dotenv').config();

// assign the db url
let { DATABASE_URL } = process.env;

// if we are running tests reassign the db url (make sure this is in your .env)
// this should work fine for travis build also
if (process.env.NODE_ENV === 'test') DATABASE_URL = process.env.TEST_DATABASE_URL;

// ensure we have a url
if (!DATABASE_URL) throw new Error('Environment variable DATABASE_URL should be set');

// export the connection to be invoked in requiring file
module.exports = {
  dbConnection: async () => mongoose.connect(DATABASE_URL),
};

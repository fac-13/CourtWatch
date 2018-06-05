const mongoose = require('mongoose');

const court_dump = require('../../../court_dump.json');
const { Court } = require('./../model');

require('dotenv').config();

const DATABASE_URL = process.env.MLAB_DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('Environment variable DATABASE_URL should be set');
}

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.once('open', () => {
  console.log(db.states[db.readyState]);
});

// console.log(courts);

function populateAllCourts(data) {
  Court.insertMany(data, (err, court) => {
    if (err) {
      console.log('Populate all Courts error: ', err);
    } else {
      console.log('New court added: ', court);
    }
  });
}

populateAllCourts(court_dump.courts);

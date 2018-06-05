/* eslint-disable */

// require mongoose
const mongoose = require('mongoose');

// import dump and/or dummy data
const courts_dump = require('./courts_dump.json');
const dummy_courts = require('./dummy_courts');
const dummy_hearing = require('./dummy_hearing');
const dummy_volunteer = require('./dummy_volunteer');

// import relevant schemas
const { Court } = require('../database/model');
const { Hearing } = require('../database/model');
const { Volunteer } = require('../database/model');

// access environment variables
require('dotenv').config();

// configure andopen database connection
const DATABASE_URL = process.env.MLAB_DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error('Environment variable DATABASE_URL should be set');
}
mongoose.connect(DATABASE_URL);

// log errors etc. on the connection
const db = mongoose.connection;
db
  .on('error', () => {
    console.error.bind(console, 'MongoDB connection error: ');
  })
  .once('open', () => {
    console.log(`${db.states[db.readyState]} to mongoDB on ${db.host}:${db.port}`); // eslint-disable-line
  });

function populateAll(schema, data) {
  return schema.insertMany(data, (err, court) => {
    if (err) {
      console.log('Populate all Courts error: ', err);
    } else {
      console.log('New court added: ', court);
    }
  });
}

populateAllCourts(court_dump.courts);

module.exports = {
  populateCourtsDump: populateAll(Court, courts_dump.courts),
  populateCourts: populateAll(Court, dummy_courts.courts),
  populateHearings: populateAll(Hearing, dummy_hearing),
  populateVolunteers: populateAll(Volunteer, dummy_volunteer),
};

const mongoose = require('mongoose');

const { connection } = require('../dbconnection');
const { Court } = require('./../model');

const court_dump = require('../../../court_dump.json');

// console.log(courts);

function populateAllCourts(data) {
  console.log('running the populator!');
  Court.insertMany(data, (err, court) => {
    if (err) {
      console.log('Populate all courts error: ', err);
    } else {
      console.log('New court added: ', court);
    }
  });
}

const db = mongoose.connection;

db.once('open', () => {
  console.log(db.states[db.readyState]);
});

populateAllCourts(court_dump.courts);

// module.exports = { populateAllCourts };

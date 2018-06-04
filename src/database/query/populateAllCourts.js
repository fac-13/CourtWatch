const mongoose = require('mongoose');

const { Court } = require('./../model');

const court_dump = require('../../../court_dump.json');

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

// module.exports = { populateAllCourts };

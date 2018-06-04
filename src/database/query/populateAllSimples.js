const mongoose = require('mongoose');

const { connection } = require('../dbconnection');
const { Simple } = require('./../model');

const dummy = require('../../../dummy_simple.json');

// console.log(dummy.simples);

function populateAllSimples(data) {
  console.log('running the populator!');
  Simple.insertMany(data, (err, court) => {
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

populateAllSimples(dummy.simples);

// module.exports = { populateAllSimples };

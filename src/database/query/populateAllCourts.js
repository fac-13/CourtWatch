const { Court } = require('./../model');

function populateAllCourts(data) {
  return Court.create(data, (err, court) => {
    if (err) {
      console.log('Populate all courts error: ', err);
    } else {
      console.log('New court added: ', court);
    }
  });
}

module.exports = { populateAllCourts };

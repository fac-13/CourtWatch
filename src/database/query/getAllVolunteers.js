const { Volunteer } = require('../model');

async function getAllVolunteers(options, filters) {
  return Volunteer.find(options).select(filters);
}

module.exports = { getAllVolunteers };

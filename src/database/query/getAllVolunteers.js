const { Volunteer } = require('../model');

async function getAllVolunteers(option, filter) {
  return Volunteer.find(option).select(filter);
}

module.exports = { getAllVolunteers };

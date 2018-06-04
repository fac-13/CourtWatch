const { Volunteer } = require('./../model');

function createVolunteer(data) {
  const volunteer = new Volunteer(data);
  return volunteer.save();
}

module.exports = { createVolunteer };

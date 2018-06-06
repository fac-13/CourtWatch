const { createCourt } = require('./addCourt');
const { createHearing } = require('./addHearing');
const { createVolunteer } = require('./addVolunteer');
const { getAllHearings } = require('./getAllHearings');
const { getAllVolunteers } = require('./getAllVolunteers');
const { getHearing } = require('./getHearing');
const { getVolunteer } = require('./getVolunteer');

module.exports = {
  createCourt,
  createHearing,
  createVolunteer,
  getAllHearings,
  getAllVolunteers,
  getHearing,
  getVolunteer,
};

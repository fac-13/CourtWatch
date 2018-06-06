const { createCourt } = require('./addCourt');
const { createHearing } = require('./addHearing');
const { createVolunteer } = require('./addVolunteer');
const { getAllCourts } = require('./getAllCourts');
const { getAllHearings } = require('./getAllHearings');
const { getAllVolunteers } = require('./getAllVolunteers');
const { getHearing } = require('./getHearing');
const { getVolunteer } = require('./getVolunteer');

module.exports = {
  createCourt,
  createHearing,
  createVolunteer,
  getAllCourts,
  getAllHearings,
  getAllVolunteers,
  getHearing,
  getVolunteer,
};

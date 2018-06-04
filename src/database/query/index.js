const { createCourt } = require('./addCourt');
const { createHearing } = require('./addHearing');
const { createVolunteer } = require('./addVolunteer');
const { getAllHearings } = require('./getAllHearings');

module.exports = {
  createCourt,
  createHearing,
  createVolunteer,
  getAllHearings,
};

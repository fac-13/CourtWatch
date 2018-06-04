const { createCourt } = require('./addCourt');
const { createHearing } = require('./addHearing');
const { createVolunteer } = require('./addVolunteer');
const { getAllHearings } = require('./getAllHearings');
const { getHearing } = require('./getHearing');

module.exports = {
  createCourt,
  createHearing,
  createVolunteer,
  getAllHearings,
  getHearing,
};

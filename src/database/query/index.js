const {
  createVolunteer,
  getAllVolunteers,
  /* getVolunteer, */ deleteVolunteer,
} = require('./volunteers');
const { createCourt, getAllCourts, /* getCourt, */ deleteCourt } = require('./courts');
const {
  createHearing, getAllHearings, getHearing, deleteHearing,
} = require('./hearings');

module.exports = {
  // creating
  createCourt,
  createHearing,
  createVolunteer,

  // getting all
  getAllCourts,
  getAllHearings,
  getAllVolunteers,

  // getting one - detail views
  /* getCourt, */
  getHearing,
  /* getVolunteer, */

  // deleting
  deleteCourt,
  deleteHearing,
  deleteVolunteer,
};

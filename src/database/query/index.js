const {
  createVolunteer,
  getAllVolunteers,
  getVolunteer,
  deleteVolunteer,
  updateVolunteer,
} = require('./volunteers');

const {
  createCourt,
  getAllCourts,
  getCourt,
  deleteCourt,
} = require('./courts');

const {
  createHearing,
  getAllHearings,
  getHearing,
  deleteHearing,
  updateHearing,
} = require('./hearings');

module.exports = {
  // creating - add new
  createCourt,
  createHearing,
  createVolunteer,

  // getting all - list views
  getAllCourts,
  getAllHearings,
  getAllVolunteers,

  // getting one - detail views
  getCourt,
  getHearing,
  getVolunteer,

  // deleting
  deleteCourt,
  deleteHearing,
  deleteVolunteer,

  // updating
  updateHearing,
  updateVolunteer,
};

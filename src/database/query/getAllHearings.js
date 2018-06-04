const { Hearing } = require('../model');

async function getAllHearings() {
  return Hearing.find();
}

module.exports = { getAllHearings };

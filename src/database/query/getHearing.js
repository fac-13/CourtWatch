const { Hearing } = require('../model');

async function getHearing(id) {
  return Hearing.find({ _id: id });
}

module.exports = { getHearing };

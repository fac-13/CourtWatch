const { Hearing } = require('./../model');

function createHearing(data) {
  return Hearing.create(data);
}

module.exports = { createHearing };

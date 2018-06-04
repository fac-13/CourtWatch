const { Hearing } = require('./../model');

function createHearing(data) {
  const hearing = new Hearing(data);
  return hearing.save();
}

module.exports = { createHearing };

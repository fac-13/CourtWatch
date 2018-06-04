const { Hearing } = require('./../model');

function addHearing(data) {
  const hearing = new Hearing(data);
  return hearing.save();
}

module.exports = { addHearing };

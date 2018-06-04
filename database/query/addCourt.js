const { Court } = require('./../model');

function createCourt(data) {
  const court = new Court(data);
  return court.save();
}

module.exports = { createCourt };

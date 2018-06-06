const { Court } = require('../model');

async function getAllCourts(option, filter, order) {
  return Court.where(option)
    .select(filter)
    .sort(order);
}

module.exports = { getAllCourts };

const { Court } = require('./../model');

const createCourt = (data) => {
  const court = new Court(data);
  return court.save();
};

const getAllCourts = async (option, filter, order) => Court.where(option)
  .select(filter)
  .sort(order);

const deleteCourt = async id => Court.remove({ _id: id });

module.exports = { createCourt, getAllCourts, deleteCourt };

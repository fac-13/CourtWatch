const { Court } = require('./../model');

const createCourt = (data) => {
  const court = new Court(data);
  return court.save();
};

const getAllCourts = async (option, filter, order) =>
  Court.where(option)
    .select(filter)
    .sort(order);

const getCourt = async data => Court.findOne({ name: data })
  .select('court_id addresses admin_id')
  .catch((error) => {
    throw new Error(`${error.name} finding court called: ${data}`);
  });

const deleteCourt = async id => Court.remove({ _id: id });

module.exports = {
  createCourt, getAllCourts, getCourt, deleteCourt,
};

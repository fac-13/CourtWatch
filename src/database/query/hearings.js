const { Hearing } = require('../model');

const addHearing = (data) => {
  const hearing = new Hearing(data);
  return hearing.save();
};

const getAllHearings = async () => Hearing.find();

const getHearing = async id => Hearing.find({ _id: id });

const deleteHearing = async id => Hearing.remove({ _id: id });

module.exports = {
  addHearing, getAllHearings, getHearing, deleteHearing,
};

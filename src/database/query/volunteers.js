const { Volunteer } = require('./../model');

const createVolunteer = (data) => {
  const volunteer = new Volunteer(data);
  return volunteer.save();
};

const getAllVolunteers = async (option, filter) => Volunteer.find(option).select(filter);

const deleteVolunteer = async id => Volunteer.remove({ _id: id });

module.exports = { createVolunteer, getAllVolunteers, deleteVolunteer };

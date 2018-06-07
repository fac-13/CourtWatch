const { Volunteer } = require('./../model');

const createVolunteer = async data => Volunteer.create(data);

const getAllVolunteers = async (option, filter) => Volunteer.find(option).select(filter);

const getVolunteer = async id => Volunteer.find({ _id: id });

const deleteVolunteer = async id => Volunteer.remove({ _id: id });

const updateVolunteer = async (id, data) => Volunteer.where({ _id: id }).update(data);

module.exports = {
  createVolunteer,
  getAllVolunteers,
  getVolunteer,
  deleteVolunteer,
  updateVolunteer,
};

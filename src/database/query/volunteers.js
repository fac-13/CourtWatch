const { Volunteer } = require('./../model');

const createVolunteer = async (data) => {
  if (!data) throw new Error('Query called without data - failed to execute');
  return Volunteer.create(data).catch((error) => {
    throw new Error(`${error.name} adding new volunteer`);
  });
};

const getAllVolunteers = async (criteria, include) => {
  if (!criteria) throw new Error('Query called with no criteria argument - failed to execute');
  if (typeof criteria !== 'object') {
    throw new Error('Query called with invalid criteria argument - failed to execute');
  }
  return Volunteer.where(criteria)
    .select(include)
    .catch((error) => {
      throw new Error(`${error.name} reading volunteers where criteria are: ${criteria}`);
    });
};

const getVolunteer = async (id, include) => {
  if (!id) throw new Error('Query called with no id number argument - failed to execute');
  return Volunteer.findById(id)
    .select(include)
    .catch((error) => {
      throw new Error(`${error.name} reading volunteer where id number is: ${id}`);
    });
};

const deleteVolunteer = async (id) => {
  if (!id) throw new Error('Query called with no id number argument - failed to execute');
  return Volunteer.deleteOne({ _id: id }).catch((error) => {
    throw new Error(`${error.name} deleting volunteer where id number is: ${id}`);
  });
};

const updateVolunteer = async (id, data) => {
  if (!id || !data) {
    throw new Error('Query called with one or more null arguments - failed to execute');
  }
  if (typeof data !== 'object') {
    throw new Error('Query called with invalid data argument - failed to execute');
  }
  return Volunteer.updateOne({ _id: id }, data).catch((error) => {
    throw new Error(`${error.name} updating volunteer where id number is: ${id}`);
  });
};

module.exports = {
  createVolunteer,
  getAllVolunteers,
  getVolunteer,
  deleteVolunteer,
  updateVolunteer,
};

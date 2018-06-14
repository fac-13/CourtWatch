const { Hearing } = require('../model');

const createHearing = async (data) => {
  if (!data) throw new Error('Query called without data - failed to execute');
  return Hearing.create(data).catch((error) => {
    throw new Error(`${error.name} adding new hearing`);
  });
};

const getAllHearings = async (criteria, include) => {
  if (typeof criteria !== 'object' || !criteria) {
    throw new Error('Query called with invalid or no criteria argument - failed to execute');
  }
  return Hearing.where(criteria)
    .select(include)
    .catch((error) => {
      throw new Error(`${error.name} reading hearings where criteria are: ${criteria}`);
    });
};

const getHearing = async (id, include) => {
  if (!id) throw new Error('Query called with no id number argument - failed to execute');
  return Hearing.findById(id)
    .select(include)
    .catch((error) => {
      throw new Error(`${error.name} reading hearing where id number is: ${id}`);
    });
};

const deleteHearing = async (id) => {
  if (!id) throw new Error('Query called with no id number argument - failed to execute');
  return Hearing.deleteOne({ _id: id }).catch((error) => {
    throw new Error(`${error.name} deleting hearing where id number is: ${id}`);
  });
};

const updateHearing = async (id, data) => {
  if (!id || !data || typeof data !== 'object') {
    throw new Error(
      'Query called with one or more null or invalid arguments - failed to execute, id: ',
      id,
    );
  }
  return Hearing.updateOne({ _id: id }, data).catch((error) => {
    throw new Error(`${error.name} updating hearing where id number is: ${id}`);
  });
};

module.exports = {
  createHearing,
  getAllHearings,
  getHearing,
  deleteHearing,
  updateHearing,
};

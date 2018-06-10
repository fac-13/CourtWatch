const mongoose = require('mongoose');

const { dbConnection } = require('../connection');
const { Volunteer } = require('./../model');
const {
  createVolunteer,
  getAllVolunteers,
  getVolunteer,
  deleteVolunteer,
  updateVolunteer,
} = require('.');
const dummy = require('../../data_helpers/dummy_volunteer');

let db;

jest.setTimeout(10000);

beforeAll(async () => {
  await dbConnection();
  db = await mongoose.connection;
});

afterAll(async (done) => {
  await mongoose.disconnect(done);
});

test('Should fail when env not test ', () => {
  expect(process.env.NODE_ENV).toBe('test');
});

// CREATING ON THE VOLUNTEERS COLLECTION
describe('Create Query Tests', () => {
  beforeAll(async () => {
    await Volunteer.remove();
  });

  test('Volunteer collection should not include record for "Haydn Appleby"', async () => {
    const nullDocument = await Volunteer.find({ first_name: 'Haydn', last_name: 'Appleby' });
    expect(nullDocument).toHaveLength(0);
  });

  test('Should add new document to collection', async () => {
    const newVolunteer = await createVolunteer(dummy[0]);
    expect(newVolunteer.first_name).toEqual('Haydn');
    expect(newVolunteer.last_name).toEqual('Appleby');
  });

  test('Volunteer collection should now include record for "Haydn Appleby"', async () => {
    const fullDocument = await Volunteer.find({ first_name: 'Haydn', last_name: 'Appleby' });
    expect(fullDocument).toHaveLength(1);
  });

  test('Should throw error when invalid data argument is passed', async () => {
    try {
      await createVolunteer({ bad: 'data' });
    } catch (error) {
      expect(error).toEqual(new Error('ValidationError adding new volunteer'));
    }
  });

  test('Should throw error if unique constraint on email and mobile are violated', async () => {
    await createVolunteer(dummy[2]);
    try {
      await createVolunteer(dummy[2]);
    } catch (error) {
      expect(error).toEqual(new Error('MongoError adding new volunteer'));
    }
  });

  afterAll(async () => {
    await Volunteer.remove();
  });
});

// DELETING ON THE VOLUNTEERS COLLECTION
describe('Delete Query Tests', () => {
  beforeAll(async () => {
    await Volunteer.insertMany(dummy);
  });

  test('Should return array of length 5 documents for Volunteer collection', async () => {
    const allDocuments = await Volunteer.find();
    expect(allDocuments).toHaveLength(5);
  });

  test('Volunteer collection should now include record for "Giulia Teggi"', async () => {
    const fullDocument = await Volunteer.find({ first_name: 'Giulia', last_name: 'Teggi' });
    expect(fullDocument).toHaveLength(1);
  });

  test('Should delete document from the collection', async () => {
    const documentToDelete = await Volunteer.find({
      first_name: 'Giulia',
      last_name: 'Teggi',
    }).select('_id');
    const resultOfDeletion = await deleteVolunteer(documentToDelete);
    const nullDocument = await Volunteer.find({ first_name: 'Giulia', last_name: 'Teggi' });
    const allDocuments = await Volunteer.find();
    expect(resultOfDeletion).toEqual({ n: 1, ok: 1 });
    expect(nullDocument).toHaveLength(0);
    expect(allDocuments).toHaveLength(4);
  });

  test('Should throw error when null argument is passed', async () => {
    try {
      await deleteVolunteer(null);
    } catch (error) {
      expect(error).toEqual(new Error('Query called with no id number argument - failed to execute'));
    }
  });

  test('Should throw error when invalid id argument is passed', async () => {
    try {
      await deleteVolunteer('bad-data');
    } catch (error) {
      expect(error).toEqual(new Error('CastError deleting volunteer where id number is: bad-data'));
    }
  });

  afterAll(async () => {
    await Volunteer.remove();
  });
});

// READING THE VOLUNTEERS COLLECTION
describe('Get Query Tests', () => {
  beforeAll(async () => {
    await Volunteer.insertMany(dummy);
  });

  test('Should return array of length 5 documents for Volunteer collection', async () => {
    const allDocuments = await Volunteer.find();
    expect(allDocuments).toHaveLength(5);
  });

  test('Should get one document from the collection', async () => {
    const documentToGet = await Volunteer.find({
      first_name: 'Parissa',
      last_name: 'Jamali',
    }).select('_id');
    const retrievedDocument = await getVolunteer(documentToGet);
    expect(retrievedDocument.contact.email).toBe('parissajamali@gmail.com');
  });

  test('Should throw error when null id argument is passed', async () => {
    try {
      await getVolunteer(null);
    } catch (error) {
      expect(error).toEqual(new Error('Query called with no id number argument - failed to execute'));
    }
  });

  test('Should throw error when invalid id argument is passed', async () => {
    try {
      await getVolunteer('bad-data');
    } catch (error) {
      expect(error).toEqual(new Error('CastError reading volunteer where id number is: bad-data'));
    }
  });

  test('Should get more than one document from the collection', async () => {
    const retrievedDocuments = await getAllVolunteers(
      {
        'contact.notifications.email': true,
        'contact.notifications.mobile': false,
      },
      '_id contact.email',
    );
    expect(retrievedDocuments).toHaveLength(4);
  });

  test('Should throw error when null criteria argument is passed', async () => {
    try {
      await getAllVolunteers(null, '_id');
    } catch (error) {
      expect(error).toEqual(new Error('Query called with no criteria argument - failed to execute'));
    }
  });

  test('Should throw error when invalid criteria arguments are passed', async () => {
    try {
      await getAllVolunteers('bad data');
    } catch (error) {
      expect(error).toEqual(new Error('Query called with invalid criteria argument - failed to execute'));
    }
  });

  afterAll(async () => {
    await Volunteer.remove();
  });
});

// UPDATING THE VOLUNTEERS COLLECTION
describe('Update Query Tests', () => {
  beforeAll(async () => {
    await Volunteer.insertMany(dummy);
  });

  test('Should return array of length 5 documents for Volunteer collection', async () => {
    const allDocuments = await Volunteer.find();
    expect(allDocuments).toHaveLength(5);
  });

  test('Volunteer collection should now include record for "Katia Punter"', async () => {
    const fullDocument = await Volunteer.find({ first_name: 'Katia', last_name: 'Punter' });
    expect(fullDocument).toHaveLength(1);
  });

  test('Should update document from the collection', async () => {
    const documentToUpdateId = await Volunteer.find({
      first_name: 'Katia',
      last_name: 'Punter',
    }).select('_id');
    const documentToUpdate = await Volunteer.find({ _id: documentToUpdateId });
    const resultOfUpdate = await updateVolunteer(documentToUpdateId, {
      password: 'PASSWORDKATIA',
      contact: { notifications: { mobile: true } },
    });
    const updatedDocument = await Volunteer.find({ _id: documentToUpdateId });
    expect(documentToUpdate[0].contact.notifications.mobile).toBe(false);
    expect(documentToUpdate[0].password).toBe('katiapassword');
    expect(resultOfUpdate).toEqual({ n: 1, nModified: 1, ok: 1 });
    expect(updatedDocument[0].contact.notifications.mobile).toBe(true);
    expect(updatedDocument[0].password).toBe('PASSWORDKATIA');
  });

  test('Should throw error when one or more null arguments is passed', async () => {
    const documentToUpdateId = await Volunteer.find({
      first_name: 'Katia',
      last_name: 'Punter',
    }).select('_id');
    try {
      await updateVolunteer(documentToUpdateId, null);
    } catch (error) {
      expect(error).toEqual(new Error('Query called with one or more null arguments - failed to execute'));
    }
  });

  test('Should throw error when invalid data argument is passed', async () => {
    const documentToUpdateId = await Volunteer.find({
      first_name: 'Katia',
      last_name: 'Punter',
    }).select('_id');
    try {
      await updateVolunteer(documentToUpdateId, 'irrelevant argument');
    } catch (error) {
      expect(error).toEqual(new Error('Query called with invalid data argument - failed to execute'));
    }
  });

  afterAll(async () => {
    await Volunteer.remove();
  });
});

const mongoose = require('mongoose');

const { dbConnection } = require('../connection');
const { Volunteer } = require('./../model');

const dummy = require('../../data_helpers/dummy_volunteer');
const {
  createVolunteer,
  getAllVolunteers,
  getVolunteer,
  deleteVolunteer,
  updateVolunteer,
} = require('.');

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

describe('Create Query Tests', () => {
  beforeAll(async () => {
    await Volunteer.remove();
  });
  test('Volunteer collection should not include record for "Haydn Appleby"', async () => {
    const nullDocument = await Volunteer.find({ name: { first: 'Haydn', last: 'Appleby' } });
    expect(nullDocument).toHaveLength(0);
  });
  test('Should add new document to collection', async () => {
    const newVolunteer = await createVolunteer(dummy[0]);
    expect(newVolunteer.name).toEqual({ first: 'Haydn', last: 'Appleby' });
  });
  test('Volunteer collection should now include record for "Haydn Appleby"', async () => {
    const fullDocument = await Volunteer.find({ name: { first: 'Haydn', last: 'Appleby' } });
    expect(fullDocument).toHaveLength(1);
  });
  afterAll(async () => {
    await Volunteer.remove();
  });
});

describe('Delete Query Tests', () => {
  beforeAll(async () => {
    await Volunteer.insertMany(dummy);
  });
  test('Should return array of length 5 documents for Volunteer collection', async () => {
    const allDocuments = await Volunteer.find();
    expect(allDocuments).toHaveLength(5);
  });
  test('Volunteer collection should now include record for "Giulia Teggi"', async () => {
    const fullDocument = await Volunteer.find({ name: { first: 'Giulia', last: 'Teggi' } });
    expect(fullDocument).toHaveLength(1);
  });
  test('Should delete document from the collection', async () => {
    const documentToDelete = await Volunteer.find({
      name: { first: 'Giulia', last: 'Teggi' },
    }).select('_id');
    const resultOfDeletion = await deleteVolunteer(documentToDelete);
    const nullDocument = await Volunteer.find({ name: { first: 'Giulia', last: 'Teggi' } });
    const allDocuments = await Volunteer.find();
    expect(resultOfDeletion).toEqual({ n: 1, ok: 1 });
    expect(nullDocument).toHaveLength(0);
    expect(allDocuments).toHaveLength(4);
  });
  afterAll(async () => {
    await Volunteer.remove();
  });
});

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
      name: { first: 'Parissa', last: 'Jamali' },
    }).select('_id');
    const retrievedDocument = await getVolunteer(documentToGet);
    expect(retrievedDocument).toHaveLength(1);
  });
  test('Should get more than one document from the collection', async () => {
    const retrievedDocuments = await getAllVolunteers({
      notifications: { email: true, mobile: false },
    });
    expect(retrievedDocuments).toHaveLength(4);
  });
  afterAll(async () => {
    await Volunteer.remove();
  });
});

describe('Update Query Tests', () => {
  beforeAll(async () => {
    await Volunteer.insertMany(dummy);
  });
  test('Should return array of length 5 documents for Volunteer collection', async () => {
    const allDocuments = await Volunteer.find();
    expect(allDocuments).toHaveLength(5);
  });
  test('Volunteer collection should now include record for "Katia Punter"', async () => {
    const fullDocument = await Volunteer.find({ name: { first: 'Katia', last: 'Punter' } });
    expect(fullDocument).toHaveLength(1);
  });
  test('Should update document from the collection', async () => {
    const documentToUpdateId = await Volunteer.find({
      name: { first: 'Katia', last: 'Punter' },
    }).select('_id');
    const documentToUpdate = await Volunteer.find({ _id: documentToUpdateId });
    const resultOfUpdate = await updateVolunteer(documentToUpdateId, {
      password: 'PASSWORDKATIA',
      notifications: { mobile: true },
    });
    const updatedDocument = await Volunteer.find({ _id: documentToUpdateId });
    expect(documentToUpdate[0].notifications.mobile).toBe(false);
    expect(documentToUpdate[0].password).toBe('katiapassword');
    expect(resultOfUpdate).toEqual({ n: 1, nModified: 1, ok: 1 });
    expect(updatedDocument[0].notifications.mobile).toBe(true);
    expect(updatedDocument[0].password).toBe('PASSWORDKATIA');
  });
  afterAll(async () => {
    await Volunteer.remove();
  });
});

const mongoose = require('mongoose');

const { dbConnection } = require('../connection');
const { Hearing } = require('./../model');
const {
  createHearing,
  getAllHearings,
  getHearing,
  deleteHearing,
  updateHearing,
} = require('.');
const dummy = require('../../data_helpers/dummy_hearing');

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

// CREATING ON THE HEARINGS COLLECTION
describe('Create Query Tests', () => {
  beforeAll(async () => {
    await Hearing.remove();
  });

  test('Hearing collection should not include record for "North Shields County Court..."', async () => {
    const nullDocument = await Hearing.find({
      court_name: 'North Shields County Court and Family Court',
    });
    expect(nullDocument).toHaveLength(0);
  });

  test('Should add new document to collection', async () => {
    const newHearing = await createHearing(dummy[0]);
    expect(newHearing.court_name).toEqual('North Shields County Court and Family Court');
    expect(newHearing.court_id).toEqual('5b16bf9ea461886ddf59f0b9');
  });

  test('Hearing collection should now include record for "North Shields County Court..."', async () => {
    const fullDocument = await Hearing.find({
      court_name: 'North Shields County Court and Family Court',
      court_id: '5b16bf9ea461886ddf59f0b9',
    });
    expect(fullDocument).toHaveLength(1);
  });

  test('Should throw error when invalid data argument is passed', async () => {
    try {
      await createHearing({ bad: 'data' });
    } catch (error) {
      expect(error).toEqual(new Error('ValidationError adding new hearing'));
    }
  });

  test('Should throw error if required constraint on hearing date and court name are violated', async () => {
    try {
      await createHearing({
        court_id: '5b16bf9ea461886ddf59f0b9',
        admin_id: '3094',
        contact: [],
        addresses: [],
      });
    } catch (error) {
      expect(error).toEqual(new Error('ValidationError adding new hearing'));
    }
  });

  afterAll(async () => {
    await Hearing.remove();
  });
});

// // DELETING ON THE HEARINGS COLLECTION
describe('Delete Query Tests', () => {
  beforeAll(async () => {
    await Hearing.insertMany(dummy);
  });

  test('Should return array of length 5 documents for hearings collection', async () => {
    const allDocuments = await Hearing.find();
    expect(allDocuments).toHaveLength(5);
  });

  test('Hearing collection should now include record for "Nottingham County Court and Family Court"', async () => {
    const fullDocument = await Hearing.find({
      court_name: 'Nottingham County Court and Family Court',
      court_id: '5b16bf9ea461886ddf59f0bb',
    });
    expect(fullDocument).toHaveLength(1);
  });

  test('Should delete document from the collection', async () => {
    const documentToDelete = await Hearing.find({
      court_name: 'Nottingham County Court and Family Court',
      court_id: '5b16bf9ea461886ddf59f0bb',
    }).select('_id');
    const resultOfDeletion = await deleteHearing(documentToDelete);
    const nullDocument = await Hearing.find({
      court_name: 'Nottingham County Court and Family Court',
      court_id: '5b16bf9ea461886ddf59f0bb',
    });
    const allDocuments = await Hearing.find();
    expect(resultOfDeletion).toEqual({ n: 1, ok: 1 });
    expect(nullDocument).toHaveLength(0);
    expect(allDocuments).toHaveLength(4);
  });

  test('Should throw error when null argument is passed', async () => {
    try {
      await deleteHearing(null);
    } catch (error) {
      expect(error).toEqual(new Error('Query called with no id number argument - failed to execute'));
    }
  });

  test('Should throw error when invalid id argument is passed', async () => {
    try {
      await deleteHearing('bad-data');
    } catch (error) {
      expect(error).toEqual(new Error('CastError deleting hearing where id number is: bad-data'));
    }
  });

  afterAll(async () => {
    await Hearing.remove();
  });
});

// // READING THE HEARINGS COLLECTION
describe('Get Query Tests', () => {
  beforeAll(async () => {
    await Hearing.insertMany(dummy);
  });

  test('Should return array of length 5 documents for hearing collection', async () => {
    const allDocuments = await Hearing.find();
    expect(allDocuments).toHaveLength(5);
  });

  test('Should get one document from the collection', async () => {
    const documentToGet = await Hearing.find({
      court_name: 'Shrewsbury Crown Court',
      court_id: '5b16bf9ea461886ddf59f0bd',
    }).select('_id');
    const retrievedDocument = await getHearing(documentToGet);
    expect(retrievedDocument.admin_id).toBe(3150);
  });

  test('Should throw error when null id argument is passed', async () => {
    try {
      await getHearing(null);
    } catch (error) {
      expect(error).toEqual(new Error('Query called with no id number argument - failed to execute'));
    }
  });

  test('Should throw error when invalid id argument is passed', async () => {
    try {
      await getHearing('bad-data');
    } catch (error) {
      expect(error).toEqual(new Error('CastError reading hearing where id number is: bad-data'));
    }
  });

  test('Should get more than one document from the collection', async () => {
    const retrievedDocuments = await getAllHearings(
      {
        admin_id: { $gte: 3100 },
      },
      '_id hearing_date',
    );
    expect(retrievedDocuments).toHaveLength(4);
  });

  test('Should throw error when null criteria argument is passed', async () => {
    try {
      await getAllHearings(null, '_id');
    } catch (error) {
      expect(error).toEqual(new Error('Query called with invalid or no criteria argument - failed to execute'));
    }
  });

  test('Should throw error when invalid criteria arguments are passed', async () => {
    try {
      await getAllHearings('bad data');
    } catch (error) {
      expect(error).toEqual(new Error('Query called with invalid or no criteria argument - failed to execute'));
    }
  });

  afterAll(async () => {
    await Hearing.remove();
  });
});

// // UPDATING THE HEARINGS COLLECTION
describe('Update Query Tests', () => {
  beforeAll(async () => {
    await Hearing.insertMany(dummy);
  });

  test('Should return array of length 5 documents for hearing collection', async () => {
    const allDocuments = await Hearing.find();
    expect(allDocuments).toHaveLength(5);
  });

  test('Hearing collection should now include record for "Peterborough Magistrates\' Court"', async () => {
    const fullDocument = await Hearing.find({
      court_name: 'Peterborough Magistrates\' Court',
      court_id: '5b16bf9ea461886ddf59f0bf',
    });
    expect(fullDocument).toHaveLength(1);
  });

  test('Should update document from the collection', async () => {
    const documentToUpdateId = await Hearing.find({
      court_name: 'Peterborough Magistrates\' Court',
      court_id: '5b16bf9ea461886ddf59f0bf',
    }).select('_id');
    const documentToUpdate = await Hearing.find({ _id: documentToUpdateId });
    const resultOfUpdate = await updateHearing(documentToUpdateId, {
      'watching.0.volunteer_id': '5b16bf9ea461886ddf59f0c1',
      'watching.0.full_name': 'Helen Zhou',
    });
    const updatedDocument = await Hearing.find({ _id: documentToUpdateId });
    expect(documentToUpdate[0].watching).toHaveLength(0);
    expect(resultOfUpdate).toEqual({ n: 1, nModified: 1, ok: 1 });
    expect(updatedDocument[0].watching).toHaveLength(1);
    expect(updatedDocument[0].watching[0].full_name).toBe('Helen Zhou');
  });

  test('Should throw error when one or more null arguments is passed', async () => {
    const documentToUpdateId = await Hearing.find({
      court_name: 'Peterborough Magistrates\' Court',
      court_id: '5b16bf9ea461886ddf59f0bf',
    }).select('_id');
    try {
      await updateHearing(documentToUpdateId, null);
    } catch (error) {
      expect(error).toEqual(new Error('Query called with one or more null or invalid arguments - failed to execute'));
    }
  });

  test('Should throw error when invalid data argument is passed', async () => {
    const documentToUpdateId = await Hearing.find({
      court_name: 'Peterborough Magistrates\' Court',
      court_id: '5b16bf9ea461886ddf59f0bf',
    }).select('_id');
    try {
      await updateHearing(documentToUpdateId, 'irrelevant argument');
    } catch (error) {
      expect(error).toEqual(new Error('Query called with one or more null or invalid arguments - failed to execute'));
    }
  });

  afterAll(async () => {
    await Hearing.remove();
  });
});

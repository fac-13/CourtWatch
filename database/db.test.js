const mongoose = require('mongoose');

require('dotenv').config();

const dbconnection = require('./dbconnection');

beforeAll(() => {
  dbconnection();
});

afterAll((done) => {
  mongoose.disconnect(done);
});

test('Should fail when env not test ', () => {
  expect(process.env.NODE_ENV).toBe('test');
});

test('Test if database connection exists', () => {
  expect(mongoose.connection.name).toBe('cwdb_test');
});

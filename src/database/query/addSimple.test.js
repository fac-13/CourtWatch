const mongoose = require('mongoose');

const dbConnection = require('./../dbConnection');
const { addSimple } = require('./');

let db;

beforeAll(async () => {
  db = await mongoose.connection;
});

afterAll(async (done) => {
  await mongoose.disconnect(done);
});

test('Should fail when env not test ', () => {
  expect(process.env.NODE_ENV).toBe('test');
});

const mongoose = require('mongoose');

const { dbConnection } = require('./connection');

let db;

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

test('Database connection is active', async () => {
  const connectionState = await db.readyState;
  expect(connectionState).toBe(1);
});

test('Active connection is for test database', async () => {
  const dbName = await db.name;
  expect(dbName).toBe('testdb');
});

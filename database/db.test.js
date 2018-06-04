const mongoose = require('mongoose');

require('dotenv').config();

let db;

beforeAll(async () => {
  db = await mongoose.createConnection(process.env.TEST_DATABASE_URL);
});

afterAll(async (done) => {
  await mongoose.disconnect(done);
});

test('Jest is working', () => {
  expect(2 + 2).toBe(4);
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

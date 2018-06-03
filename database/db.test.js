const mongoose = require('mongoose');

require('dotenv').config();

beforeAll(() => {
  mongoose.connect(process.env.TEST_DATABASE_URL);
});

afterAll((done) => {
  mongoose.disconnect(done);
});

test('Jest is working', () => {
  expect(2 + 2).toBe(4);
});

test('Should fail when env not test ', () => {
  expect(process.env.NODE_ENV).toBe('test');
});

test('Database connection is active', () => {
  expect(mongoose.connection.readyState).not.toBe(0);
});

test('Active connection is for test database', () => {
  expect(mongoose.connection.name).toBe('testdb');
});

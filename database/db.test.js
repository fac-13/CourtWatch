const mongoose = require('mongoose');

require('dotenv').config();

beforeAll(() => {
  mongoose.connect(process.env.DATABASE_URL);
});

afterAll((done) => {
  mongoose.disconnect(done);
});

test('Should fail when env not test ', () => {
  expect(process.env.NODE_ENV).toBe('test');
});

test('Test if database connection exists', () => {
  expect(mongoose.connection.name).toBe('test_cwdb');
});

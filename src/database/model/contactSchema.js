const mongoose = require('mongoose');

const { Schema } = mongoose;

const aontactSchema = new Schema({
  _id: false,
  name: String,
  type: String,
  email: String,
  number: Number,
});

module.exports = { aontactSchema };

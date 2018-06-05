const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema({
  _id: false,
  town: String,
  county: String,
  type: String,
  postcode: String,
  address: Number,
});

module.exports = { addressSchema };

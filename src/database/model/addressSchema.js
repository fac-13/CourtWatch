const mongoose = require('mongoose');

const { Schema } = mongoose;

const AddressSchema = new Schema({
  _id: false,
  town: String,
  county: String,
  type: String,
  postcode: String,
  address: Number,
});

module.exports = { AddressSchema };

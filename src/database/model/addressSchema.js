const mongoose = require('mongoose');

const { Schema } = mongoose;

const AddressSchema = new Schema();

AddressSchema.add({
  _id: false,
  town: String,
  county: String,
  type: String,
  postcode: String,
  address: String,
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = { Address };

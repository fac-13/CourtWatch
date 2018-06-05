const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema({
  _id: false,
  town: String,
  county: String,
  type: String,
  postcode: String,
  address: String,
});

const courtSchema = new Schema(
  {
    name: { type: String },
    addresses: [addressSchema],
    contacts: [{ _id: false, name: String, number: String }],
    opening_times: [{ _id: false, opening_time: String }],
    court_types: { type: Array },
    areas_of_law: [{ _id: false, name: String }],
    facilities: [{ _id: false, name: String }],
    admin_id: Number,
    lat: Number,
    lon: Number,
  },
  { timestamps: true },
);

const Court = mongoose.model('Court', courtSchema);

module.exports = { Court };

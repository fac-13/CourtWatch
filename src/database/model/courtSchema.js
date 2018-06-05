const mongoose = require('mongoose');

const { addressSchema } = require('.');
const { contactSchema } = require('.');

const { Schema } = mongoose;

const courtSchema = new Schema(
  {
    name: { type: String },
    addresses: [addressSchema],
    contacts: [contactSchema],
    opening_times: [{ _id: false, opening_time: String }],
    court_types: { type: Array },
    areas_of_law: [{ _id: false, name: String }],
    facilities: [{ _id: false, name: String }],
    court_number: Schema.Types.Mixed,
    lat: Number,
    lon: Number,
  },
  { timestamps: true },
);

const Court = mongoose.model('Court', courtSchema);

module.exports = { Court };

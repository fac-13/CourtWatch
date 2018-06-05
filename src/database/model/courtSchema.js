const mongoose = require('mongoose');

const { Address } = require('.');
const { Contact } = require('.');

const { Schema } = mongoose;

const CourtSchema = new Schema(
  {
    name: { type: String },
    addresses: [Address],
    contacts: [Contact],
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

const Court = mongoose.model('Court', CourtSchema);

module.exports = { Court };

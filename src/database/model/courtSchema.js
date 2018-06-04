const mongoose = require('mongoose');

const CourtSchema = mongoose.Schema(
  {
    name: { type: String, unique: true },
    addresses: [
      {
        town: String,
        county: String,
        type: String,
        postcode: String,
        address: String,
      },
    ],
    contacts: [{ name: String, number: Number }],
    opening_times: [{ opening_time: String }],
    court_types: { type: Array },
    areas_of_law: [{ name: String }],
    facilities: [{ name: String }],
    court_number: { type: Number, unique: true },
    lat: Number,
    lon: Number,
  },
  { timestamps: true },
);

const Court = mongoose.model('Court', CourtSchema);

module.exports = { Court };

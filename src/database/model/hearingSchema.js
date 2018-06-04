const mongoose = require('mongoose');

const { Schema } = mongoose;

const HearingSchema = new Schema(
  {
    date: Date,
    court_id: { type: ObjectId, ref: Court }, // eslint-disable-line
    court_name: String,
    court_number: Number,
    watching: [
      {
        name: String,
        volunteer_id: { type: ObjectId, ref: Volunteer }, // eslint-disable-line
      },
    ],
    contact: [
      {
        name: String,
        type: String,
        email: String,
        number: Number,
      },
    ],
  },
  { timestamps: true },
);

const Hearing = mongoose.model('Hearing', HearingSchema);

module.exports = { Hearing };

const { model, Schema } = require('mongoose');

const HearingSchema = Schema(
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

const Hearing = model('Hearing', HearingSchema);

module.exports = { Hearing };

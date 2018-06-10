const mongoose = require('mongoose');

// const { Court } = require('.');
// const { Volunteer } = require('.');

const { Schema } = mongoose;

const hearingContactSchema = new Schema({
  _id: false,
  name: String,
  type: String,
  email: String,
  phone: Number,
});

const HearingSchema = new Schema(
  {
    hearing_date: {
      type: String,
      required: 'Hearing Date is a required field',
    },
    court_id: String,
    court_name: {
      type: String,
      required: 'Court Name is a required field',
    },
    addresses: [],
    admin_id: Number,
    watching: [
      {
        full_name: String,
        volunteer_id: String,
      },
    ],
    contact: [hearingContactSchema],
    notes: String,
    report: [],
    alerts: [],
  },
  { timestamps: true },
);

const Hearing = mongoose.model('Hearing', HearingSchema);

module.exports = { Hearing };

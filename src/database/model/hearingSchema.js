const mongoose = require('mongoose');

const { Court } = require('.');
const { Volunteer } = require('.');

const { Schema } = mongoose;

const contactSchema = new Schema({
  _id: false,
  name: String,
  type: String,
  email: String,
  phone: Number,
});

const HearingSchema = new Schema(
  {
    date: String,
    court_id: String,
    court_name: String,
    addresses: [],
    admin_id: Number,
    watching: [
      {
        name: String,
        volunteer_id: String,
      },
    ],
    contact: [contactSchema],
  },
  { timestamps: true },
);

const Hearing = mongoose.model('Hearing', HearingSchema);

module.exports = { Hearing };

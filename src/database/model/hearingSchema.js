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
    court_id: { type: Schema.Types.ObjectId, ref: Court },
    court_name: String,
    addresses: [],
    admin_id: Number,
    watching: [
      {
        name: String,
        volunteer_id: { type: Schema.Types.ObjectId, ref: Volunteer },
      },
    ],
    contact: [contactSchema],
  },
  { timestamps: true },
);

const Hearing = mongoose.model('Hearing', HearingSchema);

module.exports = { Hearing };

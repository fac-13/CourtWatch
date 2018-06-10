const mongoose = require('mongoose');

const { Schema } = mongoose;

const volunteerContactSchema = new Schema({
  _id: false,
  email: { type: String, unique: true },
  mobile: { type: String, unique: true },
  notifications: {
    _id: false,
    email: Boolean,
    mobile: Boolean,
  },
});

const volunteerSchema = new Schema(
  {
    first_name: {
      type: String,
      required: 'First Name is a required field',
    },
    last_name: {
      type: String,
      required: 'Last Name is a required field',
    },
    password: {
      type: String,
      required: 'Password is a required field',
    },
    admin: Boolean,
    contact: {
      type: volunteerContactSchema,
      required: 'Contacts are a required field',
    },
    location: {
      _id: false,
      county: String,
      postcode: String,
    },
    availability: [
      {
        _id: false,
        day: String,
        morning: Boolean,
        afternoon: Boolean,
      },
    ],
  },
  { timestamps: true },
);

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = { Volunteer };

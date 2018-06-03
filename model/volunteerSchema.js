const { model, Schema } = require('mongoose');

const VolunteerSchema = Schema(
  {
    name: { first: String, last: String },
    contact: { email: String, mobile: Number },
    location: { county: String, postcode: String },
    availability: [{ day: String, morning: Boolean, afternoon: Boolean }],
    notifications: { email: Boolean, mobile: Boolean },
    password: String,
    admin: Boolean,
  },
  { timestamps: true },
);

const Volunteer = model('Volunteer', VolunteerSchema);

module.exports = { Volunteer };

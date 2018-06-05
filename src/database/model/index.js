const { addressSchema } = require('./addressSchema');
const { contactSchema } = require('./contactSchema');
const { Court } = require('./courtSchema');
const { Hearing } = require('./hearingSchema');
const { Volunteer } = require('./volunteerSchema');
const { Simple } = require('./simpleSchema');

module.exports = {
  addressSchema,
  contactSchema,
  Court,
  Hearing,
  Volunteer,
  Simple,
};

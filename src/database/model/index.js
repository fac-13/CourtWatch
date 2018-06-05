const { AddressSchema: Address } = require('./addressSchema');
const { ContactSchema: Contact } = require('./contactSchema');
const { Court } = require('./courtSchema');
const { Hearing } = require('./hearingSchema');
const { Volunteer } = require('./volunteerSchema');
const { Simple } = require('./simpleSchema');

module.exports = {
  Address,
  Contact,
  Court,
  Hearing,
  Volunteer,
  Simple,
};

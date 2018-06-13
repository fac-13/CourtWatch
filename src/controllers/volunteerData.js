const { createVolunteer, getVolunteer } = require('../database/query');
const bcrypt = require('bcrypt');

exports.get = async (req, res) => {
  const { id } = req.params;
  try {
    const volunteer = await getVolunteer(id);
    res.send(volunteer);
  } catch (err) {
    console.log('getVolunteer error', err);
  }
};
// Add new volunteer to database
exports.post = async (req, res) => {
  const {
    first_name, last_name, email, mobile, password,
  } = req.body;
  const contact = {
    email,
    mobile,
    notifications: {
      email: true,
      mobile: true,
    },
  };
  const data = {
    first_name,
    last_name,
    password,
    admin: false,
    contact,
  };
  try {
    const volunteer = await createVolunteer(data);
    console.log('Volunteer', volunteer);
    // res.send(hearings);
  } catch (err) {
    console.log('createVolunteer error', err);
  }
};

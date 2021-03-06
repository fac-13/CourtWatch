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
  } = req.body.data;

  const contact = {
    email,
    mobile,
    notifications: {
      email: true,
      mobile: true,
    },
  };

  try {
    // Hash password
    const hash = await bcrypt.hash(password, 10);
    const data = {
      first_name,
      last_name,
      password: hash,
      admin: false,
      contact,
    };

    // Add volunteer to database
    const volunteer = await createVolunteer(data);
    console.log('New volunteer', volunteer);
    res.send({ success: true });
    // res.send(hearings);
  } catch (err) {
    console.log('createVolunteer error', err);
    res.send({ success: false });
  }
};

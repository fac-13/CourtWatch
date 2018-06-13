const { createVolunteer } = require('../database/query');
const bcrypt = require('bcrypt');

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
    console.log('Volunteer', volunteer);
    // res.send(hearings);
  } catch (err) {
    console.log('createVolunteer error', err);
  }
};

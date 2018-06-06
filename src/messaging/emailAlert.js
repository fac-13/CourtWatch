const sgMail = require('@sendgrid/mail');
const mongoose = require('mongoose');

require('dotenv').config();

let { DATABASE_URL } = process.env;

if (process.env.NODE_ENV === 'test') {
  DATABASE_URL = process.env.TEST_DATABASE_URL;
}

if (!DATABASE_URL) {
  throw new Error('Environment variable DATABASE_URL should be set');
}

mongoose.connect(DATABASE_URL);

const { getAllVolunteers } = require('../database/query');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const getRecipients = async () => {
  try {
    const recipients = await getAllVolunteers(null, 'name contact');
    console.log(recipients);
  } catch (err) {
    console.log('allVols error', err);
  }
};

getRecipients();

// const alert = {
//   to: recipients,
//   from: 'alerts@wip.org',
//   subject: `Upcoming Hearing: ${}`,
//   text: 'Hello plain world!',
// };

// module.exports = sgMail.send(alert);

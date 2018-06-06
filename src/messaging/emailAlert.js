const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { getAllVolunteers } = require('../database/query');

// set send-grid credentials
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const getRecipients = async () => {
  try {
    return (volunteers = await getAllVolunteers(null, 'name contact'));
    // console.log(volunteers);
  } catch (err) {
    console.log('allVols error', err);
  }
};

const generateEmail = async () => {
  try {
    const recipientsList = await getRecipients().then(recipients =>
      recipients.map(item => item.contact.email));
    const alert = {
      to: recipientsList,
      from: 'alerts@wip.org',
      subject: 'Hello world',
      text: 'Hello plain world!',
    };
    console.log(alert);
  } catch (err) {
    console.log('gererate email error', err);
  }
};

generateEmail();

// module.exports = sgMail.send(alert);

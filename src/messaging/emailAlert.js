const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { getAllVolunteers } = require('../database/query');

// set send-grid credentials
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const getRecipients = async (option, filter) => {
  try {
    const volunteers = await getAllVolunteers(option, filter);
    return volunteers;
  } catch (err) {
    console.log('error retrieving all volunteers', err);
  }
};

const generateEmail = async (option, filter, subject, text) => {
  try {
    const to = await getRecipients(option, filter).then(recipients =>
      recipients.map(item => item.contact.email));
    const from = 'alerts@wip.org';
    const alert = {
      to,
      from,
      subject,
      text,
    };
    sgMail.send(alert);
  } catch (err) {
    console.log('error generating email', err);
  }
};

const emailAlert = (option, filter, subject, text) => generateEmail(option, filter, subject, text);

// emailAlert(
//   null,
//   'name contact',
//   'WIP Alert: Upcoming Hearing',
//   'This is going to be a big string of text we need you please help!',
// );

// const msg = {
//   to: 'recipient@example.org',
//   cc: 'someone@example.org',
//   bcc: ['me@example.org', 'you@example.org'],
//   from: 'sender@example.org',
//   replyTo: 'othersender@example.org',
//   subject: 'Hello world',
//   text: 'Hello plain world!',
//   html: '<p>Hello HTML world!</p>',
// };

const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { getAllVolunteers } = require('../database/query');

// set send-grid credentials
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Dispatches signup continuation email on submission of 'expression of interest'.
 * BCC to program admins (coordinators) eventually process should be mediated...
 * @param {string} email - Email of interested party (reassigned as 'to'.
 * @param {string} name - Full name of interested party (defaults if null).
 */
const newVolunteerEmail = async ({ email: to }, name = 'Interested Person') => {
  const bcc = await getAllVolunteers({ admin: true }, 'contact.email');
  const from = 'signup@wip.org';
  const subject = 'WIP Signup: Become a Court-Watch Volunteer';
  const html = `<p>Dear ${name},</p><p>Thank you for your expression of interest in becoming a volunteer court watcher for Women in Prisons. To read more about what being a court watcher entails, and to find documents related to the role, please visit our<a href="https://court-watch.herokuapp.com/resources">resources</a> page. To complete your signup and set your preferences, please visit the <a href="https://court-watch.herokuapp.com/signup/${to}">signup</a> page.</p><p>Regards, the Court Watch Team</p>`;
  try {
    return sgMail.send({
      to,
      bcc,
      from,
      subject,
      html,
    });
  } catch (error) {
    throw new Error(`${error.name} generating new volunteer email: ${error}`);
  }
};

/**
 * Dispatches new hearing alert email on submission of 'new hearing' form.
 * BCCs all court watch volunteers (can filter for availability, location)
 * @param {string} email - Email of interested party (reassigned as 'to'.
 * @param {string} name - Full name of interested party (defaults if null).
 */
const hearingAlertEmail = async (date, location) => {
  const to = 'dummyaddress@email.com';
  const bcc = await getAllVolunteers(null, 'contact.email _id');
  const from = 'alerts@wip.org';
  const subject = 'WIP Alert: Upcoming Hearing';
  const html = '';
  try {
    return sgMail.send({
      to,
      bcc,
      from,
      subject,
      html,
    });
  } catch (error) {
    throw new Error(`${error.name} generating hearing alert email: ${error}`);
  }
};

module.exports = { newVolunteerEmail, hearingAlertEmail };

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

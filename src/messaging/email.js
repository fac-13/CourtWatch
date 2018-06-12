const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// set send-grid credentials and config
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('%%', '%%');

const sendEmail = (to, bcc, subject, content) => {
  sgMail
    .send({
      to,
      bcc,
      from: 'noreply@wip.org',
      subject,
      content,
    })
    .catch((error) => {
      const { message } = error;
      throw new Error(`Error sending single email: ${message}`);
    });
};

const sendManyEmails = (personalisations, content) => {
  sgMail
    .sendMultiple({
      personalisations,
      from: 'noreply@wip.org',
      content,
    })
    .catch((error) => {
      const { message } = error;
      throw new Error(`Error sending email to multiple recipients: ${message}`);
    });
};

module.exports = { sendEmail, sendManyEmails };

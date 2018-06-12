const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// set send-grid credentials and config
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.setSubstitutionWrappers('%%', '%%');

const sendEmail = (email, subjectLine, emailContent) => sgMail
  .send({
    to: email,
    from: 'noreply@wip.org',
    subject: subjectLine,
    content: emailContent,
  })
  .catch((error) => {
    const { message } = error;
    throw new Error(`Error sending single email: ${message}`);
  });

const sendManyEmails = (mailingList, body) => {
  sgMail
    .send({
      personalizations: mailingList,
      from: 'noreply@wip.org',
      content: body,
    })
    .catch((error) => {
      const { message } = error;
      throw new Error(`Error sending email to multiple recipients: ${message}`);
    });
};

module.exports = { sendEmail, sendManyEmails };

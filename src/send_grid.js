const sgMail = require('@sendgrid/mail');

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'haydnba@gmail.com',
  from: 'alerts@wip.org',
  subject: 'Hearing Today',
  text: 'Hello plain world!',
  html: '<p>Hello HTML world!</p>',
};

sgMail.send(msg);

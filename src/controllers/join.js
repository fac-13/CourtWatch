const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// set send-grid credentials and config
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.post = async (req, res) => {
  const { email, name } = req.body.data;
  const emailContent = [
    {
      type: 'text/plain',
      value: `Dear ${name},\nThank you for your expression of interest in becoming a volunteer court watcher for Women in Prisons. To read more about what being a court watcher entails, and to find documents related to the role, please visit https://court-watch.herokuapp.com/resources. To complete your signup and set your preferences, please visit https://court-watch.herokuapp.com/signup?v=${email}.\nRegards, the Court Watch Team`,
    },
    {
      type: 'text/html',
      value: `<p>Dear ${name},<br />Thank you for your expression of interest in becoming a volunteer court watcher for Women in Prisons. To read more about what being a court watcher entails, and to find documents related to the role, please visit our <a href="https://court-watch.herokuapp.com/resources">resources</a> page. To complete your signup and set your preferences, please visit the <a href="https://court-watch.herokuapp.com/signup?v=${email}">signup</a> page.<br />Regards, the Court Watch Team</p>`,
    },
  ];
  try {
    sgMail
      .send({
        to: email,
        from: 'noreply@wip.org',
        subject: 'WIP Signup: Become a Court-Watch Volunteer',
        content: emailContent,
      })
      .then(() => res.send({ success: true }))
      .catch((error) => {
        const { message } = error;
        throw new Error(`Error sending single email: ${message}`);
      });
  } catch (err) {
    console.log('Join error', err);
    res.send({ success: false });
  }
};

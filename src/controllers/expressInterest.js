const { sendEmail } = require('../messaging/email');
const { getAllVolunteers } = require('../database/query');

// exports.get = (req, res) => {};

exports.post = async (req, res) => {
  const { email, name } = req.body;
  const admins = await getAllVolunteers({ admin: true }, 'contact.email');
  const content = [
    {
      type: 'text/plain',
      value: `Dear ${name},\nThank you for your expression of interest in becoming a volunteer court watcher for Women in Prisons. To read more about what being a court watcher entails, and to find documents related to the role, please visit https://court-watch.herokuapp.com/resources. To complete your signup and set your preferences, please visit https://court-watch.herokuapp.com/signup/${email}.\nRegards, the Court Watch Team`,
    },
    {
      type: 'text/html',
      value: `<p>Dear ${name},<br />Thank you for your expression of interest in becoming a volunteer court watcher for Women in Prisons. To read more about what being a court watcher entails, and to find documents related to the role, please visit our<a href="https://court-watch.herokuapp.com/resources">resources</a> page. To complete your signup and set your preferences, please visit the <a href="https://court-watch.herokuapp.com/signup/${email}">signup</a> page.<br />Regards, the Court Watch Team</p>`,
    },
  ];
  const continueSignup = sendEmail(
    email,
    admins,
    'WIP Signup: Become a Court-Watch Volunteer',
    content,
  );
  try {
    continueSignup();
    res.send('thanks lol!');
  } catch (err) {
    console.log(err);
  }
};

const { newVolunteerEmail } = require('../messaging/email');

exports.post = (req, res) => {
  const { email, name } = req.body;
  try {
    newVolunteerEmail(email, name);
    res.send('thanks!');
  } catch (error) {
    console.log(error);
  }
};

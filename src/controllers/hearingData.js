/* eslint-disable */
const { createHearing, getHearing, getAllVolunteers } = require('../database/query');
const { sendEmail } = require('../messaging/email');

exports.get = async (req, res) => {
  const { id } = req.params;
  try {
    const hearing = await getHearing(id, {});
    res.send(hearing);
  } catch (err) {
    console.log('getHearing error', err);
  }
};

exports.post = async (req, res) => {
  const { hearing_date, court_id, court_name, notes } = req.body;
  const contact = [({ name, type, email, number } = req.body)];
  const recipients = await getAllVolunteers({}, 'contact.email _id');
  const personalisations = recipients.map(item => ({
    to: item.contact.email,
    subject: 'WIP Alert: Upcoming Hearing',
    substitutions: { id: item._id },
  }));
  const content = [
    {
      type: 'text/html',
      value: `<p>Alert! Hearings involving women are scheduled to take place from 10am on ${hearing_data} at ${court_name}. If you can observe these hearings please visit the court watch <a href="https://court-watch.herokuapp.com/schedule/%%id%%">schedule</a> page to confirm your attendance.<br />Regards, the Court Watch Team.</p>`,
    },
    {
      type: 'text/plain',
      value: `Alert! Hearings involving women are scheduled to take place from 10am on ${hearing_data} at ${court_name}. If you can observe these hearings please visit https://court-watch.herokuapp.com/schedule/%%id%% to confirm your attendance. Regards, the Court Watch Team.`,
    },
  ];
  const hearingAlert = sendEmail(personalisations, message);
  try {
    await createHearing({
      hearing_date,
      court_id,
      court_name,
      contact,
      notes,
    });
    hearingAlert();
    res.send('thanks LOL!!');
  } catch (err) {
    console.log('add hearing error', err);
  }
};

const moment = require('moment');
const {
  createHearing, getHearing, getCourt, getAllVolunteers,
} = require('../database/query');
const { sendManyEmails } = require('../messaging/email');

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
  // get all the stuff we need
  const {
    date, court, name, type, email, phone,
  } = req.body;
  const contact = {
    name,
    type,
    email,
    phone,
  };
  const hearingDate = moment(date).format('YYYY-MM-D');
  const courtName = court.trim();

  const content = [
    {
      type: 'text/html',
      value: `<p>Alert! Hearings involving women are scheduled to take place from 10am on ${hearingDate} at ${courtName}. If you can observe these hearings please visit the court watch <a href="https://court-watch.herokuapp.com/schedule/%%id%%">schedule</a> page to confirm your attendance.<br />Regards, the Court Watch Team.</p>`,
    },
    {
      type: 'text/plain',
      value: `Alert! Hearings involving women are scheduled to take place from 10am on ${hearingDate} at ${courtName}. If you can observe these hearings please visit https://court-watch.herokuapp.com/schedule/%%id%% to confirm your attendance. Regards, the Court Watch Team.`,
    },
  ];

  const hearingAlert = await getAllVolunteers({}, 'contact.email _id')
    .then(recipients =>
      recipients.map(item => ({
        to: item.contact.email,
        subject: 'WIP Alert: Upcoming Hearing',
        substitutions: { id: item._id },
      })))
    .then(personalisations => sendManyEmails(personalisations, content));

  // const hearingAlert = sendManyEmails(personalizations, content);

  // try retrieving court data and adding new hearing to db
  try {
    const courtData = await getCourt(courtName);
    const newHearing = await createHearing({
      hearing_date: hearingDate,
      court_id: courtData.id,
      court_name: courtName,
      addresses: courtData.addresses,
      admin_id: courtData.admin_id,
      contact,
    });
    const newEmailAlert = await hearingAlert();
    console.log(newHearing, newEmailAlert);
    res.send('thanks LOL!!');
  } catch (err) {
    console.log('add hearing error', err);
  }
};

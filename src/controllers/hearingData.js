const sgMail = require('@sendgrid/mail');
const moment = require('moment');

require('dotenv').config();

const {
  createHearing,
  getAllVolunteers,
  getHearing,
  getCourt,
  getVolunteer,
  updateHearing,
} = require('../database/query');

// set send-grid credentials and config
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{', '}}');

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
  const {
    date, court, name, type, email, phone,
  } = req.body.data;

  const contact = {
    name,
    type,
    email,
    phone,
  };

  const hearingDate = moment(date, 'dddd DD MMMM YYYY').format('YYYY-MM-D');

  const courtName = court.trim();
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
    const hearingId = newHearing._id;
    const messageBody = [
      {
        type: 'text/html',
        value: `<p>Alert!<br />Hearings involving women are scheduled to take place from 10am on ${hearingDate} at ${courtName}. If you can observe these hearings please visit the court watch
        <a href="https://court-watch.herokuapp.com/hearing/${hearingId}?attend={{volunteer_id}}">hearing details</a>
        page to confirm your attendance.<br />Regards, the Court Watch Team.</p>`,
      },
    ];
    await getAllVolunteers({}, 'contact.email _id')
      .then(recipients =>
        recipients.map(recipient => ({
          to: recipient.contact.email,
          substitutions: { volunteer_id: recipient._id }, // eslint-disable-line
        })))
      .then(mailingList =>
        sgMail.send({
          personalizations: mailingList,
          from: 'noreply@wip.org',
          subject: 'WIP Alert: Upcoming Hearing',
          content: messageBody,
        }))
      .catch((error) => {
        const { message } = error;
        throw new Error(`Error sending email to multiple recipients: ${message}`);
      });
    res.send({ success: true });
  } catch (err) {
    console.log('add hearing error', err);
    res.send({ success: false });
  }
};

exports.put = async (req, res) => {
  const {
    hearingId, volunteerId, firstName, lastName,
  } = req.body.data;
  // console.log(hearingId, volunteerId, firstName, lastName);
  try {
    // const watcher = await getVolunteer(volunteerId, 'first_name last_name contact _id');
    const updatedHearing = await updateHearing(hearingId, {
      'watching.0.volunteer_id': `${volunteerId}`,
      'watching.0.full_name': `${firstName} ${lastName}`,
    });
    res.send(updatedHearing);
  } catch (err) {
    console.log('update hearing error', err);
  }
};

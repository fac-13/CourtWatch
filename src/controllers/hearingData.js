const moment = require('moment');
const { createHearing, getHearing, getCourt } = require('../database/query');
const { emailAlert } = require('../messaging/emailAlert');

exports.get = async (req, res) => {
  const { id } = req.params;

  try {
    const hearing = await getHearing(id, {});
    res.send(hearing);
  } catch (err) {
    console.log('getHearing error', err);
  }
};

// Add new hearing to database

exports.post = async (req, res) => {

  const { date, court, name, type, email, phone } = req.body;
  console.log("Req body", req.body)
  const formattedDate = moment(date).format('YYYY-MM-D');

  const contact = [
    {
      name,
      type,
      email,
      phone,
    },
  ];

  try {
    const formattedCourt = court.trim();
    const courtData = await getCourt(formattedCourt);
    const newHearing = await createHearing({
      hearing_date: formattedDate,
      court_id: courtData.id,
      court_name: formattedCourt,
      addresses: courtData.addresses,
      admin_id: courtData.admin_id,
      contact,
    });
    console.log("New hearing", newHearing)
  } catch (err) {
    console.log('add hearing error', err);
  }

  // emailAlert(
  //   null,
  //   'name contact',
  //   'WIP Alert: Upcoming Hearing',
  //   'This is going to be a big string of text we need you please help!',
  // );
};

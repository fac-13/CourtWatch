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
  // console.log("Date", date)
  // const formattedDate = moment(date).format('YYYY-MM-D');

  const contact = [
    {
      name,
      type,
      email,
      phone,
    },
  ];

  console.log("Contact", contact)

  try {
    const formattedCourt = court.trim();
    const courtData = await getCourt(formattedCourt);
    console.log("CourtData", courtData);
  } catch (err) {
    console.log('getCourt error', err);
  }
  // createHearing({
  //   date : formattedDate,
  //   court_id,
  //   court_name,
  //  addresses,
  //  admin_id,
  //   contact,
  //   notes
  // });

  // emailAlert(
  //   null,
  //   'name contact',
  //   'WIP Alert: Upcoming Hearing',
  //   'This is going to be a big string of text we need you please help!',
  // );
};

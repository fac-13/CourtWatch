/* eslint-disable */

const { addHearing, getHearing } = require('../database/query');
const { emailAlertHearing } = require('../messaging/emailAlert');

exports.get = async (req, res) => {
  try {
    const hearing = await getHearing();
    res.send(hearing);
  } catch (err) {
    console.log('getHearing error', err);
  }
};

exports.post = (req, res) => {
  const { date, court_name, name, type, email, number, notes } = req.body;

  // function to retrieve court id

  const contact = [
    {
      name,
      type,
      email,
      number,
    },
  ];

  addHearing({
    date,
    court_name,
    contact,
    notes,
  });

  emailAlertHearing({
    date,
    court_name,
    notes,
  });
};

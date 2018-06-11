/* eslint-disable */
const { createHearing, getHearing } = require('../database/query');
const { hearingAlertEmail } = require('../messaging/email');

exports.get = async (req, res) => {
  const { id } = req.params;
  try {
    const hearing = await getHearing(id);
    res.send(hearing);
  } catch (err) {
    console.log('getHearing error', err);
  }
};

exports.post = async (req, res) => {
  const { hearing_date, court_id, court_name, notes } = req.body;
  const contact = [({ name, type, email, number } = req.body)];
  try {
    await createHearing({
      hearing_date,
      court_id,
      court_name,
      contact,
      notes,
    });
    hearingAlertEmail(hearing_date, court_id);
  } catch (error) {}
};

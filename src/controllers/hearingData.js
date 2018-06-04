const { addHearing, getHearing } = require('../database/query');

exports.get = async (req, res) => {
  try {
    const hearing = await getHearing();
    res.send(hearing);
  } catch (err) {
    console.log('getHearing error', err);
  }
};

exports.post = (req, res) => {
  const {
    date, court_name, name, type, email, number, description,
  } = req.body;

  // function to retrieve court id

  const contact = [{
    name,
    type,
    email,
    number,
  }];

  addHearing({
    date, court_name, contact, description,
  });
};


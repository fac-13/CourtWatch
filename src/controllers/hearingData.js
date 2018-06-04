const { addHearing, getHearing } = require('../database/query');

exports.get = async (req, res) => {
  try {
    const hearing = await getHearing();
    res.send(hearing);
  } catch (err) {
    console.log('getHearing error', err);
  }
};


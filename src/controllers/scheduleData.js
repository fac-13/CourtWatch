const { getAllHearings } = require('../database/query');

exports.get = async (req, res) => {
  try {
    const hearings = await getAllHearings({});

    res.send(hearings);
  } catch (err) {
    console.log('getAllHearing error', err);
  }
};

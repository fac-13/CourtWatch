const { getAllCourts } = require('../database/query');

exports.post = async (req, res) => {
  const { data } = req.body;
  console.log('Data', data);
  if (data.length > 0) {
    const pattern = new RegExp(`\\b(?!Court|Centre|Family|Magistrate)(${data})`, 'i');
    try {
      const courts = await getAllCourts({ name: pattern, display: true }, 'name _id', {
        name: 'asc',
      });
      res.send(courts);
    } catch (err) {
      // improve this
      console.log(err);
    }
  }
};

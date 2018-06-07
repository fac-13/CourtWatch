const { getAllCourts } = require('../database/query');

exports.get = async (req, res) => {
  // mathStr will take the string value passed in the body of the request from the client form
  const matchStr = 'Mar';
  // matchStr is interpolated into a regex pattern
  // excludes common irrelevant words (court, family, centre...)
  const pattern = new RegExp(`\\b(?!Court|Centre|Family|Magistrate)(${matchStr})`, 'i');
  try {
    // courts will be an array of the names and ids of courts matching the pattern
    // getAllCourts fn takes options name == pattern and display == true
    // returns name and id, sorted alphabetically
    const courts = await getAllCourts({ name: pattern, display: true }, 'name _id', {
      name: 'asc',
    });
    // send the data back to client
    res.send(courts);
    // shoud add error handler here to throuw error to the catch block
  } catch (err) {
    // improve this
    console.log(err);
  }
};

const { Simple } = require('./../model');

function addSimple(data) {
  const simple = new Simple(data);
  return simple.save();
}

module.exports = { addSimple };

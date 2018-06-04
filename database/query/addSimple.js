const { Simple } = require('./../model');

function createSimple(data) {
  const simple = new Simple(data);
  return simple.save();
}

module.exports = { createSimple };

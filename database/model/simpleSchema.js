const mongoose = require('mongoose');

const SimpleSchema = mongoose.Schema({
  name: String,
  age: Number,
  colour: Boolean,
});

const Simple = mongoose.model('Simple', SimpleSchema);

module.exports = { Simple };

const mongoose = require('mongoose');

const { Schema } = mongoose;

const SimpleSchema = new Schema({
  name: String,
  age: Number,
  colour: Boolean,
});

const Simple = mongoose.model('Simple', SimpleSchema);

module.exports = { Simple };

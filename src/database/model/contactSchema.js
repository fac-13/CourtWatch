const mongoose = require('mongoose');

const { Schema } = mongoose;

const ContactSchema = new Schema({
  _id: false,
  name: String,
  type: String,
  email: String,
  number: Number,
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = { Contact };

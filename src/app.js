const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dbConnection = require('./database/dbconnection');
const controllers = require('./controllers');

// log db connection events
const db = mongoose.connection;
db
  .on('error', () => {
    console.error.bind(console, 'MongoDB connection error: ');
  })
  .once('open', () => {
    console.log(`${db.states[db.readyState]} to mongoDB on ${db.host}:${db.port}`); // eslint-disable-line
  });

// declare application
const app = express();

// data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use(controllers);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'dist/index.html')));

module.exports = app;

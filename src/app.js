const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dbConnection = require('./database/dbconnection');
const controllers = require('./controllers');

// log db connection status and error events
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

// -- all database and external requests will go here --
app.use(controllers);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'dist/index.html')));

module.exports = app;

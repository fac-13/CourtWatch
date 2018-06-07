const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { dbConnection } = require('./database/connection');
const controllers = require('./controllers');

// declare application
const app = express();

// access db connection
const db = mongoose.connection;

// invoke db connection and log connection events
dbConnection().catch(console.error.bind(console, 'MongoDB connection error: '));
db.once('open', () => {
  console.log(`${db.states[db.readyState]} to mongoDB on ${db.host}:${db.port}`); // eslint-disable-line
});

// data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use(controllers);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'dist/index.html')));

module.exports = app;

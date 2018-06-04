const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const controllers = require('./controllers');

const app = express();

// form data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));

// -- all database and external requests will go here --

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'dist/index.html')));

app.use(controllers);

module.exports = app;

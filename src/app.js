const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

// -- all database and external requests will go here --

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'dist/index.html')));

module.exports = app;

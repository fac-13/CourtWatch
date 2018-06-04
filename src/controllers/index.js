const express = require('express');

const router = express.Router();

// route handlers
const schedule = require('./schedule');

router.get('/schedule', schedule.get);

module.exports = router;

const express = require('express');

const router = express.Router();

// route handlers
const scheduleData = require('./scheduleData');

router.get('/schedule-data', scheduleData.get);

module.exports = router;

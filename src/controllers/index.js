const express = require('express');

const router = express.Router();

// route handlers
const scheduleData = require('./scheduleData');
const hearingData = require('./hearingData');

// GET routes
router.get('/schedule-data', scheduleData.get);
router.get('/hearing-data/:id', hearingData.get);

// POST routes
router.post('/add-hearing', hearingData.post);

module.exports = router;

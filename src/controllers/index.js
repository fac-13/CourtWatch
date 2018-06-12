const express = require('express');

const router = express.Router();

// route handlers
const scheduleData = require('./scheduleData');
const hearingData = require('./hearingData');
const courtData = require('./courtData');
const volunteerData = require('./volunteerData');

// GET routes
router.get('/schedule-data', scheduleData.get);
router.get('/hearing-data/:id', hearingData.get);

// POST routes
router.post('/add-hearing', hearingData.post);
router.post('/match-court', courtData.post);
router.post('/signup', volunteerData.post);


module.exports = router;

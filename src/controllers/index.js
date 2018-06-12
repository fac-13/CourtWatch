const express = require('express');

const router = express.Router();

// route handlers
const courtData = require('./courtData');
const join = require('./join');
const hearingData = require('./hearingData');
const scheduleData = require('./scheduleData');
// const volunteerData = require('./volunteerData');

// GET routes
router.get('/hearing-data/:id', hearingData.get);
router.get('/schedule-data', scheduleData.get);

// POST routes
router.post('/add-hearing', hearingData.post);
router.post('/match-court', courtData.post);
// router.post('/signup', volunteerData.post);
router.post('/join', join.post);

module.exports = router;

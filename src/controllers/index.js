const express = require('express');

const router = express.Router();

// route handlers
const scheduleData = require('./scheduleData');
const hearingData = require('./hearingData');
const courtData = require('./courtData');
const volunteerSignup = require('./volunteerSignup');
const expressInterest = require('./expressInterest');

// GET routes
router.get('/schedule-data', scheduleData.get);
router.get('/hearing-data/:id', hearingData.get);
router.get('/signup/:email', volunteerSignup.get);

// POST routes
router.post('/add-hearing', hearingData.post);
router.post('/match-court', courtData.post);
router.post('/signup', volunteerSignup.post);
router.post('express-interest', expressInterest.post);

module.exports = router;

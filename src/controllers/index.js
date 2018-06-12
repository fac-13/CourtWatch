const express = require('express');

const router = express.Router();

// route handlers
const courtData = require('./courtData');
const expressInterest = require('./expressInterest');
const hearingData = require('./hearingData');
const scheduleData = require('./scheduleData');
// const resourceLinks = require('./volunteerResources');
// const volunteerSignup = require('./volunteerSignup');

// GET routes
// router.get('/express-interest', expressInterest.get);
router.get('/hearing-data/:id', hearingData.get);
router.get('/schedule-data', scheduleData.get);
// router.get('resources', resourceLinks.get);
// router.get('/signup/:email', volunteerSignup.get);

// POST routes
router.post('/add-hearing', hearingData.post);
// router.post('/add-resources', resourceLinks.post);
router.post('/join', expressInterest.post);
router.post('/match-court', courtData.post);
// router.post('/register', volunteerSignup.post);

module.exports = router;

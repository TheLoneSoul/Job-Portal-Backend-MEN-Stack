const express = require('express');
const router = express.Router();
const jobs = require('./jobRoutes.js');
router.use('/jobs', jobs);
module.exports = router;
const express = require('express');
const router = express.Router();
const jobs = require('./jobRoutes.js');
const User = require('./userRoute.js')

router.use('/user', User);
router.use('/jobs', jobs);
module.exports = router;
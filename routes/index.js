const express = require('express');
const router = express.Router();
const jobs = require('./jobRoutes.js');
const User = require('./userRoute.js')
const {protection} = require('../middleware/authMiddleware.js')

router.use('/user', User);
router.use('/jobs', protection, jobs);
module.exports = router;
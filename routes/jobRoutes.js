const express = require('express');
const router = express.Router();
const {getAllJobs, postJobs} = require('../controls/jobControllers')
router.get('/jobs', getAllJobs);
router.post('/jobs', postJobs);
module.exports = router;
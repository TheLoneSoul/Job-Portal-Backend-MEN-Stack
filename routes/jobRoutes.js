const express = require('express');
const router = express.Router();
const {getAllJobs, postJobs, getJobsById} = require('../controls/jobControllers')
router.get('/jobs', getAllJobs);
router.get('/jobs/:id', getJobsById);
router.post('/jobs', postJobs);
module.exports = router;
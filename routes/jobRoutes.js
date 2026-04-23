const express = require('express');
const router = express.Router();
const {getAllJobs, postJobs, getJobsById, updateJobsById} = require('../controls/jobControllers')
router.get('/jobs', getAllJobs);
router.get('/jobs/:id', getJobsById);
router.post('/jobs', postJobs);
router.put('/jobs/:id', updateJobsById);
module.exports = router;
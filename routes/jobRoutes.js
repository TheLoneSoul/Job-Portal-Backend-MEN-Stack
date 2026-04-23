const express = require('express');
const router = express.Router();
const {getAllJobs, postJobs, getJobsById, updateJobsById, deleteJobsById} = require('../controls/jobControllers')
router.get('/jobs', getAllJobs);
router.get('/jobs/:id', getJobsById);
router.post('/jobs', postJobs);
router.put('/jobs/:id', updateJobsById);
router.delete('/jobs/:id', deleteJobsById);
module.exports = router;
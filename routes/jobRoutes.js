const express = require('express');
const router = express.Router();
const {getAllJobs, postJobs, getJobsById, updateJobsById, deleteJobsById} = require('../controls/jobControllers.js')
router.get('/', getAllJobs);
router.get('/:id', getJobsById);
router.post('/', postJobs);
router.put('/:id', updateJobsById);
router.delete('/:id', deleteJobsById);
module.exports = router;
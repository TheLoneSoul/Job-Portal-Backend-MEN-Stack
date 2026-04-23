const Jobs = require('../models/Jobs')

exports.getAllJobs = async(req, res, next) => {
    try {
        const job = await Jobs.find();
        if(job.length === 0){
            res.status(404).json({
            success: false,
            message: "Job not found"
            })
        }
        res.status(200).json(job);
    } catch (error) {
        next(error)
    }
};

exports.postJobs = async(req, res, next) => {
    try {
        const job = await Jobs.create(req.body);
        res.status(201).json(job)
    } catch (error) {
        next(error)
    }
}
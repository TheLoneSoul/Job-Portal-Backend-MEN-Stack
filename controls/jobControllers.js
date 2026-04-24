const Jobs = require('../models/Jobs.js')

exports.getAllJobs = async(req, res, next) => {
    try {
        //Pagination Logic
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 3;
        const skip = (page - 1) * limit;
        const job = await Jobs.find().skip(skip).limit(limit);
        const totalJob = await Jobs.countDocuments();
        if(job.length === 0){
            res.status(404).json({
            success: false,
            message: "Job not found"
            })
        }
        res.status(200).json({
            page,
            limit,
            skip,
            totalJob,
            job
        });
    } catch (error) {
        next(error);
    }
};

exports.postJobs = async(req, res, next) => {
    try {
        const job = await Jobs.create(req.body);
        res.status(201).json(job);
    } catch (error) {
        next(error);
    }
};

exports.getJobsById = async(req, res, next)=> {
    try {
        const job = await Jobs.findById(req.params.id);
        if( !job){
            res.status(404).json({
                success: false,
                message: "Job not found"
            })
        }
        res.status(200).json(job);
    } catch (error) {
        next(error);
    }
};

exports.updateJobsById = async(req, res, next) => {
    try {
        const job = await Jobs.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!job){
            res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }
        res.status(200).json(job);
    } catch (error) {
        next(error);
    }
};

exports.deleteJobsById = async(req, res, next) => {
    try {
        const job = await Jobs.findByIdAndDelete(req.params.id);
        if(!job){
            res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Job deleted from database"
        });
    } catch (error) {
        next(error);
    }
};
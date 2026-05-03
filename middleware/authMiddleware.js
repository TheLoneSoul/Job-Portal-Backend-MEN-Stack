const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.protection = async(req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer")){
           return res.status(401).json({success: false, message: "Unauthorize: No token provided!"})
        };
        const token = authHeader.split(" ")[1];
        const verification = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(verification.userId).select('-password');
        if(!user){
            return res.status(404).json({success: false, message: "User not found"})
        }
        req.user = user;
        next();
    } catch (error) {
        next(error)
    }
};

exports.isAdmin = async(req, res, next) => {
    try {
        if(req.user && req.user.role === 'admin'){
            return next();
        }
        res.status(401).json({success: false, message: "Forbidden: Requires admin"});
    } catch (error) {
        next(error)
    }
}
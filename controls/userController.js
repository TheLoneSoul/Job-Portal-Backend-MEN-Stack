const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
exports.registerUser = async(req, res, next) => {
    try {
        const {email, password, name} = req.body;
        const isUserExist = await User.findOne({email});
        if (isUserExist){
            return res.status(409).json({success: false, message:"User with this email already exists"});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            password:hashPassword,
            name
        });
        res.status(201).json({success: true, message:"User Registered Successfully."})

    } catch (error) {
        next(error);
    }
};

exports.signinUser = async(req, res, next) => {
    try {
        const {email, password} = req.body;
        const isUser = await User.findOne({email});
        if (!isUser){
            return res.status(404).json({success: false, message: "Invalid Credential: User with this email doesn't exist."})
        }
        const comparePassword = await bcrypt.compare(password, isUser.password);
        if (!comparePassword){
            return res.status(401).json({success: false, message: "Invalid Credential: Password didn't match"});
        }
        const token = jwt.sign({userId: isUser._id, email: isUser.email, name: isUser.name}, process.env.SECRET_KEY, {expiresIn:'1d'})
        res.status(200).json({success: true, token, message: "Login Successful"})
    } catch (error) {
        next(error);
    }
}

exports.getUser = async(req, res, next) => {
    try {
        const user = await User.find();
        if (user.length === 0){
            return res.status(404).json({success: false, message: "User not found"});
        }
        res.status(200).json({success:true, user});
    } catch (error) {
        next(error);
    }
};
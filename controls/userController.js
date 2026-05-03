const User = require('../models/User');
const bcrypt = require('bcryptjs')

exports.registerUser = async(req, res, next) => {
    try {
        const {email, password, name} = req.body;
        const isUserExist = await User.findOne({email});
        if(isUserExist){
            return res.status(409).json("User with this email already exists");
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

exports.getUser = async(req, res, next) => {
    try {
        const user = await User.find();
        if(user.length === 0){
            return res.status(404).json({success: false, message: "User not found"});
        }
        res.status(200).json({success:true, user});
    } catch (error) {
        next(error);
    }
};
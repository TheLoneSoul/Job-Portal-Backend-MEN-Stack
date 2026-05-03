const User = require('../models/User');

exports.getUser = async(req, res, next) => {
    try {
        const user = await User.find(req.body);
        if(user.length === 0){
            return res.status(404).json({success: false, message: "User not found"});
        }
        res.status(200).json({success:true, user});
    } catch (error) {
        next(error);
    }
};

exports.validateSignin = (req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password){
        return res.status(400).json({success: false, message: "All fields are required"})
    }
    next();
};

exports.validateRegister = (req, res, next) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password){
        return res.status(400).json({success: false, message: "All fields are required"});
    }
    next();
};

exports.validateJob = (req, res, next) => {
    const {title, company, description} = req.body;
    if (!title, !company, !description){
        return res.status(400).json({success: false, message: "All fields are required"})
    }
    next();
};
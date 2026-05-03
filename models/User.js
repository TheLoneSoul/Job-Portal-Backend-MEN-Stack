const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {type: String, trim: true,require: true},
    email: {type: String, trim: true, require: true},
    password: {type: String, require: true},
    role: {type: String, enum:['admin', 'user'], default: 'user'}
},
{timestamps: true}
);

module.exports = mongoose.model('User', userSchema);


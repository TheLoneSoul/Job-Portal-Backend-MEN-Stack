const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    title: {type: String, required: true},
    company: {type: String, required: true},
    location: String,
    salary: {type: Number, min:0},
    description: {type: String, required:true}
},

{timestamps: true}

);

module.exports = mongoose.model('Jobs', jobSchema);
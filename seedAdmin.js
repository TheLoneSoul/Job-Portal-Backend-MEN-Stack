const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs')
require('dotenv').config();
require('express').json();
const seedAdmin = async()=>{
    await mongoose.connect(process.env.mongoDatabaseURI,{
        serverSelectionTimeoutMS:3000
    })
    const adminCredential = {
        name:'Admin',
        email: 'admin@admin.com',
        password : 'admin@123',
        role: 'admin'
    }
    const hashPassword = await bcrypt.hash(adminCredential.password, 10);
    const isExist = await User.findOne({email:adminCredential.email});
    if (isExist){
        console.log("Email is already exist in database");
        process.exit(1);
    }    
    const user = await User.create({
        email:adminCredential.email,
        password:hashPassword,
        name:adminCredential.name,
        role:adminCredential.role
    });

    console.log("Admin creater Successfully");
    process.exit(0);
}

seedAdmin().catch((error) => {
    console.error(error.message);
    process.exit(1);
})
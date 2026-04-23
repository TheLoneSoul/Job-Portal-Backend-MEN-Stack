const mongoose = require('mongoose');
require('dotenv').config();
databaseURI = process.env.mongoDatabaseURI;

const databaseConnection = async() => {
    try {
        const connect = await mongoose.connect(databaseURI, {
            serverSelectionTimeoutMS: 20000
        });
        console.log(`Database Connected: ${connect.connection.host}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
module.exports = databaseConnection;
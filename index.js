const express = require('express');
const databaseConnection = require('./databaseConnection.js');
const jobs = require('./routes/index.js')
const app = express();
require('dotenv').config();
databaseConnection();

app.use(express.json());
app.use('/api', jobs);
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500
    res.status(statusCode).json({
        success: false,
        message: error.message || "Internal Error"
    })
})
app.listen(3000, () => {
    console.log("Server is running");  
});
const express = require('express');
const databaseConnection = require('./databaseConnection.js');
const jobs = require('./routes/index.js')
const app = express();
require('dotenv').config();
databaseConnection();

app.use(express.json());
app.use('/api', jobs);
app.listen(3000, () => {
    console.log("Server is running");  
});
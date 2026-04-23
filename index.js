const express = require('express');
const databaseConnection = require('./databaseConnection.js');
require('dotenv').config();
const app = express();
databaseConnection();

app.use(express.json());

app.use('/api', (req, res) => {
    res.send('API is working');
});

app.listen(3000, () => {
    console.log("Server is running");
    
});
const express = require('express');
const { log } = require('node:console');
const app = express();


app.use(express.json());

app.use('/api', (req, res) => {
    res.send('API is working');
})

app.listen(3000, () => {
    console.log("Server is running");
    
})
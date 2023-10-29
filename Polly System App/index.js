const mongoose = require('mongoose');
const express = require('express');
const port = 9000;
const db = require('./config/mongoose');
const app = express();

// app routes to routes folder
app.use(express.urlencoded());
app.use('/', require('./routes/index'));

app.listen(port, (err) => {
    if (err) {
        console.log(`Their is something went wrong while conneting the port:${err}`);
        return;
    }
    console.log(`${port} is connected successfully`);
})
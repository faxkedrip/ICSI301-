const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Middlewares
app.use('/posts', () => {
    console.log('EADF')
});

app.get('/', (req, res) => {
    res.send('We are on home');
});

//listen
app.listen(3000);


//connect to db
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to db')
});

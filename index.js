const express=require('express')
var mongoose = require('mongoose');


const app=express()



app.use(express.json({extended:false}));
// Allows us to accept json data into our api 

// Defining our routes
app.use('/', require('./routes/index'));
app.use('/api/url',require('./routes/url'));


const PORT=5000;


app.listen(PORT, () => console.log('Server running on port 5000'));

mongoose.connect('mongodb://localhost:27017/URL_Shortner')
    .then(function (result) {
        console.log("connected with the database");
    })
    .catch(function (err) {
        console.log(err);
    });


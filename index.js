const express = require('express');
var mongoose = require('mongoose');

const app = express();


app.use(express.json());

// Defining the Routes
app.use('/', require('./routes/view'));
app.use('/api/url', require('./routes/url_shortener'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Mongoose Connection
mongoose.connect('mongodb://localhost:27017/URL_Shortner_App')
    .then(function (result) {
        console.log("Connected with the database");
    })
    .catch(function (err) {
        console.log(err);
    });

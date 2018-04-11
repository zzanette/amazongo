const express = require('express');
const monrgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');

const app = express();



mongoose.connect(config.database, (err) => {
    if (err) {
        console.log(config.database);
        console.log('Error:' + err);
    } else {
        console.log("Connected!!!!");
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(monrgan('dev'));
//app.use(cors);

const routerAccount = require('./routes/account');
app.use('/api/accounts', routerAccount);

app.listen(config.port, err => {
    console.log('magic happens: ' + config.port);
})


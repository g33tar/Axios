require('dotenv').load()

var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

var cars = require('./routes/cars');

app.use('/api/cars', cars);

app.listen(process.env.PORT || 5000);
console.log('Waz aboot on server');

module.exports = app;

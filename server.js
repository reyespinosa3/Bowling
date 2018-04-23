console.log("server.js has launched");

// app requires the following dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// creates a new express app called app
const app = express();

// connect to db models
var db = require('./models');

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// degines a root route to localhost:3000
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


// connects app to localhost on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});

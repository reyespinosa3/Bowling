console.log("server.js has launched");

// app requires the following dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
// const router = express.Router();

// creates a new express app called app
const app = express();
// connect to db models
const db = require('./models');

// serve static files in public
app.use(express.static('public'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// importing index.js from routes folder
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

// route for league page
app.get('/league', function (req, res) {
  res.render('league.ejs', {
    title: "My Leagues Page",
    js: "/js/league.js"
  });
});

//route for game page
app.get('/game', function (req, res) {
  res.render('game.ejs', {
    title: "My Games Page",
    js: "/js/game.js"
  });
});

// route for user page
app.get('/user', function (req, res) {
  res.render('user.ejs', {
    title: "My User Page"
  });
});
/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});

// connects app to localhost on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Server is listening at localhost:3000');
});

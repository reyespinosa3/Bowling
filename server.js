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

// importing index.js, league.js and game.js from routes folder
const indexRoute = require('./routes/index');
const leagueRoute = require('./routes/league');
const gameRoute = require('./routes/game');

app.use('/', indexRoute);
app.use('/league', leagueRoute);
app.use('/game', gameRoute);

// app.get('/', function(req,res){
// 	// here's a sample route
//   res.send({message: 'Home page coming soon'})
// });

/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});

// connects app to localhost on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Server is listening at http://localhost:3000/');
});

console.log("server.js has launched");

// app requires the following dependencies
const express      = require('express');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const path         = require('path');
const bcrypt       = require('bcrypt');
const cookieParser = require('cookie-parser');
const session      = require('express-session');
// const route = express.Router();

// creates a new express app called app
const app = express();
// connect to db models
const db = require('./models');

// to use cookieParser
app.use(cookieParser());
// to use sessions
app.use(session({
  secret: 'my favorite dog',
  saveUninitialized: true,
  resave: true}));
// serve static files in public
app.use(express.static('public'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// to use routes from routes folder
const indexRoute     = require('./routes/index');
const leagueRoute    = require('./routes/league');
const gameRoute      = require('./routes/game');
const newleagueRoute = require('./routes/newleague');
const newgameRoute   = require('./routes/newgame');
const signupRoute    = require('./routes/signup');
const loginRoute     = require('./routes/login');
app.use('/', indexRoute);
app.use('/league', leagueRoute);
app.use('/game', gameRoute);
app.use('/newleague', newleagueRoute);
app.use('/newgame', newgameRoute);
app.use('/signup', signupRoute);
app.use('/login', loginRoute);

// log out route
app.get('/logout', (req,res) => {
	console.log(req.session)
	req.session.user = null;
	res.redirect('/')
})

/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});

// connects app to localhost on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Server is listening at localhost:3000');
});

const express = require('express');
const loginRoute = express.Router();
const db = require('../models');
const bcrypt      = require('bcrypt');
const saltRounds  = 10;

loginRoute.get('/', function (req, res) {
  res.render('login.ejs', {
    title: "Log In Page",
    js: "/js/login.js"
  });
});

loginRoute.post('/', (req, res) => {
	let username = req.body.userName;
	let enteredPassword = req.body.password;

	db.User.findOne({userName: username}, function(err, user) {
    console.log(user);
    if(user) {
			bcrypt.compare(enteredPassword, user.password, (err, result) => {
        if(err) {
					console.log("Incorrect password!");
          res.redirect('/login');
				};
				if(result) {
					console.log("Logged in!");
					res.redirect('/league');
				}
			})
		} else {
			console.log("No User Found");
			res.redirect('/');
		}
    });

});

module.exports = loginRoute;
console.log('login.js in routes has been accessed');

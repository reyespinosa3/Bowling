const express = require('express');
const signupRoute = express.Router();
const db = require('../models');

signupRoute.get('/', function (req, res) {
  res.render('signup.ejs', {
    title: "Multiple Bowling League Tracker",
    js: "/js/signup.js"
  });
});

signupRoute.post('/', function(req, res){
  db.User.create(req.body, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/league');
    }
  })
});

module.exports = signupRoute;
console.log('newleague.js in routes has been accessed');

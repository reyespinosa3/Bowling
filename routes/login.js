const express = require('express');
const loginRoute = express.Router();
const db = require('../models');

loginRoute.get('/', function (req, res) {
  res.render('login.ejs', {
    title: "Log In Page",
    js: "/js/login.js"
  });
});

loginRoute.post('/', function(req, res){
  db.User.create(req.body, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/league');
    }
  })
});

module.exports = loginRoute;
console.log('login.js in routes has been accessed');

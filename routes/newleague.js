const express = require('express');
const newleagueRoute = express.Router();
const db = require('../models');

newleagueRoute.get('/', function (req, res) {
  res.render('newleague.ejs', {
    title: "Multiple Bowling League Tracker",
    js: "/js/main.js"
  });
});

newleagueRoute.post('/', function(req, res){
  db.League.create(req.body, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("New League Created");
      res.redirect('/league');
    }
  })
});

module.exports = newleagueRoute;
console.log('newleague.js in routes has been accessed');

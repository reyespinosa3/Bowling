const express = require('express');
const newgameRoute = express.Router();
const db = require('../models');

newgameRoute.get('/', function (req, res) {
  res.render('newgame.ejs', {
    title: "Multiple Bowling League Tracker",
    js: "/js/main.js"
  });
});

newgameRoute.post('/', function(req, res){
  db.Game.create(req.body, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/game');
    }
  })
});
module.exports = newgameRoute;
console.log('newgame.js in routes has been accessed');

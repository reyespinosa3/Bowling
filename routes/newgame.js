const express = require('express');
const newgameRoute = express.Router();
const db = require('../models');

newgameRoute.get('/', function (req, res) {
  res.render('newgame.ejs', {
    title: "Multiple Bowling League Tracker",
    js: "/js/main.js"
  });
});

module.exports = newgameRoute;
console.log('newgame.js in routes has been accessed');

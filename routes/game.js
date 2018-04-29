const express = require('express');
const gameRoute = express.Router();
const db = require('../models');

gameRoute.get('/', function (req, res) {
  db.Game.find(function(err, data) {
    if (err) {
      console.log("Problem with Server: " + err);
      res.sendStatus(500);
    }
    // req.session.user = user;
    res.render('game', {
    data: data,
    title: "My Games Page",
    js: "/js/game.js"
  });
});
});

module.exports = gameRoute;
console.log('game.js in routes has been accessed');

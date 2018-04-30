const express = require('express');
const gameRoute = express.Router();
const db = require('../models');

gameRoute.get('/', function (req, res) {
  db.Game.find(function(err, data) {
    console.log(data);
    if (err) {
      console.log("Problem with Server: " + err);
      res.sendStatus(500);
    }
    res.render('game', {
    data: data,
    title: "My Games Page",
    js: "/js/main.js"
  });
});
});

module.exports = gameRoute;
console.log('game.js in routes has been accessed');

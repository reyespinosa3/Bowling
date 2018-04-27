const express = require('express');
const gameRoute = express.Router();
const db = require('../models');

//route for game page
gameRoute.get('/', function (req, res) {
  res.render('game.ejs', {
    title: "Multiple Bowling League Tracker",
    js: "/js/main.js"
  });
});

// gameRoute.get('/game', function (req, res) {
//   db.Game.find(function(err, data) {
//     if (err) {
//       console.log("Problem with Server: " + err);
//       res.sendStatus(500);
//     }
//     // res.json(game);
//     res.render('game', {
//     data: data,
//     title: "My Games Page",
//     js: "/js/game.js"
//   });
// });
// });

module.exports = gameRoute;
console.log('game.js in routes has been accessed');

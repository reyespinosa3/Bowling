const express = require('express');
const leagueRoute = express.Router();
const db = require('../models');

// designates a route to league
// leagueRoute.get('/', function (req, res) {
//   res.render('league.ejs', {
//     title: "Multiple Bowling League Tracker",
//     js: "/js/main.js"
//   });
// });

// routes used to get data from mongodb
leagueRoute.get('/', function (req, res) {
    db.League.find(function(err, data) {
      if (err) {
        console.log("Problem with Server: " + err);
        res.sendStatus(500);
    }
    res.render('league', {
    data: data,
    title: "My Leagues Page",
    js: "/js/league.js"
  });
});
});

module.exports = leagueRoute;
console.log('league.js in routes has been accessed');

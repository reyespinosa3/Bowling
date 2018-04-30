const express = require('express');
const leagueRoute = express.Router();
const db = require('../models');

// route used to get data from mongodb
leagueRoute.get('/', function (req, res) {
    db.League.find(function(err, data) {
      if (err) {
        console.log("Problem with Server: " + err);
        res.sendStatus(500);
    }
    // req.session.user = user;
    res.render('league', {
    data: data,
    title: "My Leagues Page",
    js: "/js/main.js"
  });
});
});

module.exports = leagueRoute;
console.log('league.js in routes has been accessed');

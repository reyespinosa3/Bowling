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
  let league = req.body.leagueName;
  let location = req.body.locationName;

  let newleague = {
    leagueName: league,
    leagueLocation: location
  }
  db.League.create(newleague, (err, createnewleague) => {
    if (err) {
      console.log(err);
    } else {
      res.render('/league', createnewleague);
    }
  })
})
module.exports = newleagueRoute;
console.log('newleague.js in routes has been accessed');

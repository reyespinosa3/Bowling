const express = require('express');
const newleagueRoute = express.Router();
const db = require('../models');

newleagueRoute.get('/', function (req, res) {
  res.render('newleague.ejs', {
    title: "Multiple Bowling League Tracker",
    js: "/js/main.js"
  });
});

// newleagueRoute.post('/', function(req, res){
//   db.League.create(req.body, function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.redirect('/');
//     }
//   })
// });

newleagueRoute.post('/', function(req, res) {
  db.League.create(req.body, function(err, newlycreatedleague) {
    if (err) {
      console.log("Problem with Server: " + err);
      res.sendStatus(500);
    }
    console.log("New League Added to Dabase");
  });
  res.redirect('/league')
});


module.exports = newleagueRoute;
console.log('newleague.js in routes has been accessed');

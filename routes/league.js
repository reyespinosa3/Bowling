const express = require('express');
const leagueRouter = express.Router();

// designates a root route to localhost:3000
leagueRouter.get('/league', function (req, res) {
  res.render('league.ejs');
});

module.exports = leagueRouter;
console.log('league.js in routes has been accessed');

console.log('league.js in routes has been accessed');

const express = require('express');
const leagueRouter = express.Router();

// designates a root route to localhost:3000
leagueRouter.get('/league', function (req, res) {
  res.render('index.ejs');
});

module.exports = leagueRouter;

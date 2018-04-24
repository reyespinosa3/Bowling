console.log('game.js in routes has been accessed');

const express = require('express');
const gameRouter = express.Router();

// designates a root route to localhost:3000
gameRouter.get('/game', function (req, res) {
  res.render('index.ejs');
});

module.exports = gameRouter;

const express = require('express');
const gameRouter = express.Router();

// designates a root route to localhost:3000
gameRouter.get('/game', function (req, res) {
  res.render('game.ejs');
});

module.exports = gameRouter;
console.log('game.js in routes has been accessed');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema ({
  game1: Number,
  game2: Number,
  game3: Number,
  seriesTotal: Number
});

var Game = mongoose.model('Game', GameSchema);
module.exports = Game;

console.log('game.js in models has been accessed');

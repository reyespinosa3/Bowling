var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/bowling");
var Schema = mongoose.Schema;

var GameSchema = new Schema ({
  week: Number,
  game1: Number,
  game2: Number,
  game3: Number
});

var Game = mongoose.model('Game', GameSchema);
module.exports = Game;

console.log('game.js in models has been accessed');

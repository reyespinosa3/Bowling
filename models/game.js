var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/bowling");
var Schema = mongoose.Schema;

var GameSchema = new Schema ({
  game1: String,
  game2: String,
  game3: String
});

var Game = mongoose.model('Game', GameSchema);
module.exports = Game;

console.log('game.js in models has been accessed');

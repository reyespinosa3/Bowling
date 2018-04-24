console.log('game.js in models has been accessed');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema ({
  gameOne: Number,
  gameTwo: Number,
  gameThree: Number,
  seriesTotal: Number
});

var Game = mongoose.model('Game', GameSchema);

module.exports = Game;

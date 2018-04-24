
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bowling");

module.exports.League = require('./league.js');
module.exports.Game = require('./game.js');

console.log('index.js in models has been accessed');

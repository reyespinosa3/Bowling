
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bowling");

module.exports.index = require('./index.js');
module.exports.League = require('./league.js');
module.exports.Game = require('./game.js');
module.exports.User = require('./user.js');

console.log('index.js in models has been accessed');

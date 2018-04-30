
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bowling");
// mongoose.connect("mongodb://127.0.0.1:27017/bowling");


module.exports.index = require('./index.js');
module.exports.League = require('./league.js');
module.exports.Game = require('./game.js');
module.exports.User = require('./user.js');

console.log('index.js in models has been accessed');

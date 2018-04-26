var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/bowling");
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
  userName: String,
  userEmail: String,
  userPassword: String,
  leagueName: String,
  leagueLocation: String,
  game1: Number,
  game2: Number,
  game3: Number
});

var User = mongoose.model('User', UserSchema);
module.exports = User;

console.log('user.js in models has been accessed');

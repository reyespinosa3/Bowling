var mongoose = require('mongoose');
var Schema = mongoose.Schema;
League = require('./league');


var UserSchema = new Schema ({
  userName: String,
  userEmail: String,
  password: String,
  league: [League.schema]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;

console.log('user.js in models has been accessed');

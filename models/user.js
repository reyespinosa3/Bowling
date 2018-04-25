var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
  userName: String,
  userEmail: String,
  userPassword: String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;

console.log('user.js in models has been accessed');
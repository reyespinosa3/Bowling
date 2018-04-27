var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/bowling");
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
  userName: String,
  userEmail: String,
  passwordDigest: String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;

console.log('user.js in models has been accessed');

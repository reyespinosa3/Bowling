var mongoose = require('mongoose');
// var bcrypt = require('bcrypt');
// mongoose.connect("mongodb://localhost/bowling");
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
  userName: String,
  userEmail: String,
  password: String
});

// UserSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.getSaltSync(10));
// }
//
// UserSchema.methods.validpassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// }

var User = mongoose.model('User', UserSchema);
module.exports = User;

console.log('user.js in models has been accessed');


const express     = require('express');
const signupRoute = express.Router();
const db          = require('../models');
const bcrypt      = require('bcrypt');
const saltRounds  = 10;

signupRoute.get('/', function (req, res) {
  res.render('signup.ejs', {
    title: "Sign Up Page",
    js: "/js/signup.js"
  });
});

signupRoute.post('/', function(req, res) {
  let userName = req.body.userName;
  let userEmail = req.body.userEmail;
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    let user = new db.User({userName: userName, userEmail: userEmail, password: hash});
    db.User.create(user).then(function() {
      console.log("new user created", userName);
      // req.session.user = user;
      res.redirect('/league')
    })
  })
})


module.exports = signupRoute;
console.log('signup.js in routes has been accessed');

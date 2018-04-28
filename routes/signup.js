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
  db.User.create(req.body, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/game');
    }
  })
})

// signupRoute.post('/', function(req, res){
//   let username = req.body.userName;
//   bcrypt.hash(req.body.passwordDigest, saltRounds, function(err, hash) {
//     let user = new User({userName: userName, passwordDigest: hash});
//     user.save().then(function() {
//       console.log("New User Created", username);
//       res.redirect('/league')
//     })
//   })
// });

module.exports = signupRoute;
console.log('signup.js in routes has been accessed');


// const saltRounds = 10;
// app.post('/signup', (req, res) => {
//   let username = req.body.username;
//
//   // hash the password
//   bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//     // save the password digest (hash) to the user
// 	let user = new User({username: username, passwordDigest: hash});
// 	user.save().then(() => {
// 		console.log("New user created!", username);
//     // It's best practice to use redirect after a POST request
// 		res.redirect('/videos')
// 	})
//   });
// });

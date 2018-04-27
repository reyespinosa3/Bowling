const express = require('express');
const userRoute = express.Router();

// route for user page
userRoute.get('/user', function (req, res) {
  db.User.find(function(err, data){
    if (err) {
      console.log("Problem with Server: " + err);
      res.sendStatus(500);
    }
    // res.json(data);
    res.render('user', {
      data: data,
      title: "My User Page",
      js: "/js/user.js"
  });
  });
});

module.exports = userRoute;
console.log('user.js in routes has been accessed');

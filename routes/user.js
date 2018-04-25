const express = require('express');
const userRouter = express.Router();

// designates a root route to localhost:3000
userRouter.get('/user', function (req, res) {
  res.render('user.ejs');
});

module.exports = userRouter;
console.log('user.js in routes has been accessed');

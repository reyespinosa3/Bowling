/* setting up router */
const express = require('express');
const indexRouter = express.Router();

// designates a root route to localhost:3000
indexRouter.get('/', function (req, res) {
  res.render('index.ejs', {
    title: "Multiple Bowling League Tracker",
    js: "/js/main.js"
  });
});

module.exports = indexRouter;

console.log("index js in routes has been accessed");

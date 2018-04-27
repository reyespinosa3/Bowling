const express = require('express');
const indexRoute = express.Router();

// designates a route to index page
indexRoute.get('/', function (req, res) {
  res.render('index.ejs', {
    title: "Multiple Bowling League Tracker",
    js: "/js/main.js"
  });
});

module.exports = indexRoute;

console.log("index js in routes has been accessed");

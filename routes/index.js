console.log("index js in routes has been accessed");
/* setting up router */
const express = require('express');
const indexRouter = express.Router();

// designates a root route to localhost:3000
indexRouter.get('/', function (req, res) {
  res.render('index.ejs');
});

module.exports = indexRouter;

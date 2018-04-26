var db = require('./models');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bowling");

var bowlers = [
  {
    userName: "Rey Espinosa",
    userEmail: "reynaldo.espinosa.iii@gmail.com",
    userPassword: "bowler01",
    leagueName: "Friday Night Fun",
    leagueLocation: "Manor Bowling Alley",
    game1: 175,
    game2: 225,
    game3: 200
  },
  {
    userName: "John Doe",
    userEmail: "johndoe@myserver.com",
    leagueName: "Saturday Afternoon League",
    leagueLocation: "Dart Bowl",
    game1: 125,
    game2: 225,
    game3: 150
  }];

// remove all records that match {} -- which means remove ALL records
db.User.remove({}, function(err, bowlers){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all data');

// create new records based on the array of bowlers
db.User.create(bowlers, function(err, bowlers){
  if (err) {
    return console.log('err', err);
  }
  console.log("created", bowlers.length, "bowlers");
  process.exit();
});
  }
});

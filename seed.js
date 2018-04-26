var db = require('./models');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bowling");

var bowlers = [
  {
    userName: "Rey Espinosa",
    userEmail: "reynaldo.espinosa.iii@gmail.com",
    userPassword: "bowler01"
  },
  {
    userName: "John Doe",
    userEmail: "johndoe@myserver.com",
    userPassword: "bowler02"
  }
];

var scores = [
  {
    userEmail: "reynaldo.espinosa.iii@gmail.com",
    week: 1,
    game1: 140,
    game2: 150,
    game3: 160
  },
  {
    userEmail: "johndoe@myserver.com",
    week:1,
    game1: 135,
    game2: 160,
    game3: 175
  }
];

var places = [
  {
    leagueName: "Friday Night Fun",
    leagueLocation: "Manor Lanes"
  }
];

// remove all user data
db.User.remove({}, function(err, data){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all users');

// create new user data
db.User.create(bowlers, function(err, data){
  if (err) {
    return console.log('err', err);
  }
  console.log("created", bowlers.length, "bowlers");
  process.exit();
});
  }
});

// remove all game data
// db.Game.remove({}, function(err, info){
//   if(err) {
//     console.log('Error occurred in remove', err);
//   } else {
//     console.log('removed all games');
//
// // create game data
// db.Game.create(scores, function(err, info){
//   if (err) {
//     return console.log('err', err);
//   }
//   console.log("created", scores.length, "games");
//   process.exit();
// });
//   }
// });

// remove all league data
// db.League.remove({}, function(err, sites){
//   if(err) {
//     console.log('Error occurred in remove', err);
//   } else {
//     console.log('removed all locations');
//
// // create league data
// db.League.create(places, function(err, sites){
//   if (err) {
//     return console.log('err', err);
//   }
//   console.log("created", places.length, "locations");
//   process.exit();
// });
//   }
// });

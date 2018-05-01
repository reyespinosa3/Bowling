var mongoose = require('mongoose');
var Schema = mongoose.Schema;
Game = require('./game');

var LeagueSchema = new Schema ({
  leagueName: String,
  leagueLocation: String,
  game: [Game.schema]
});

var League = mongoose.model('League', LeagueSchema);
module.exports = League;

console.log('league.js in models has been accessed');

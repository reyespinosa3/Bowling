console.log('league.js in models has been accessed');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LeagueSchema = new Schema ({
  leagueName: String,
  leagueLocation: String
});

var League = mongoose.model('League', LeagueSchema);

module.exports = League;

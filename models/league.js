var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/bowling");
var Schema = mongoose.Schema;

var LeagueSchema = new Schema ({
  leagueName: String,
  leagueLocation: String
});

var League = mongoose.model('League', LeagueSchema);
module.exports = League;

console.log('league.js in models has been accessed');

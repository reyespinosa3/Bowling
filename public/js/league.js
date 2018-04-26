console.log("league.js in js is ready");

let createLeagueModal = $('createLeagueModal');
let createLeagueBtn = $('createLeagueBtn');
let createLeagueSpan = $('close')[0];
let leagueData = [];

//code to post createLeague info to database
$('#leagueCreateSubmitBtn').on('click', function (e) {
  e.preventDefault();
  let leagueDataForm = $('#leagueDataForm').serializeArray();
  leagueData.push(leagueDataForm);
  $('#createLeagueModal').attr("style", "display: none");
  console.log(leagueData);
})

// Opens createLeague Modal
$('#createLeagueBtn').on('click', function(e) {
  $('#createLeagueModal').attr("style", "display: block");
});

// Closes createLeague Modal with X or Window Click
$('#createLeagueSpan').on('click', function(e) {
  $('#createLeagueModal').attr("style", "display: none");
});
$(window).on('click', function(e) {
  if (event.target == createLeagueModal) {
    $('#createLeagueModal').attr("style", "display: none");
  }
});


// create view of Leagues

// sends user to my games page
const games = function () {
  window.location.replace("http://localhost:3000/game");
}

console.log("main.js is ready to go!");
// variables for LogIn and SignIn Modals
let logInModal = $('logInModal');
let logInBtn = $('logInBtn');
let logInSpan = $('close')[0];
let signInModal = $('signInModal');
let signInBtn = $('signInBtn');
let signInSpan = $('close')[0];
let userData = [];

// code to post LogIn info to database
$('#logInSubmitBtn').on('click', function(e) {
  e.preventDefault();
  let logInForm = $('#logInForm').serializeArray();
  $('#logInModal').attr("style", "display: none");
  console.log(logInForm);
})

// code to post SignIn info to database
$('#signUpSubmitBtn').on('click', function(e) {
  e.preventDefault();
  let signUpForm = $('#signUpForm').serializeArray();
  userData.push(signUpForm);
  $('#signUpModal').attr("style", "display: none");
  // window.location.replace("http://localhost:3000/league");
  console.log(userData);
})

// Opens LogIn Modal
$('#logInBtn').on('click', function(e) {
  $('#logInModal').attr("style", "display: block");
});

// Closes LogIn Modal with X or Window Click
$('#logInSpan').on('click', function(e) {
  $('#logInModal').attr("style", "display: none");
});
$(window).on('click', function(e) {
  if (event.target == logInModal) {
    $('#logInModal').attr("style", "display: none");
  }
});

// Opens SignIn Modal
$('#signUpBtn').on('click', function(e) {
  $('#signUpModal').attr("style", "display: block");
});

// Closes SignIn Modal with X or Window CLick
$('#signUpSpan').on('click', function(e) {
  $('#signUpModal').attr("style", "display: none");
});
$(window).on('click', function(e) {
  if (event.target == signUpModal) {
    $('#signUpModal').attr("style", "display: none");
  }
});

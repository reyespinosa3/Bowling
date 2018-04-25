console.log("main.js is ready to go!");

let userData = [];

// code to post LogIn info to database
$('#logInSubmitBtn').on('click', function(e) {
  e.preventDefault();
  let logInForm = $('#logInForm').serialize();
  console.log(logInForm);
  
})
$('#signUpSubmitBtn').on('click', function(e) {
  e.preventDefault();
  signUpForm = $('#signUpForm').serializeArray();
  console.log(signUpForm);
  userData.push(signUpForm);
  console.log(userData);
  // $('signinbtn').toggleClass("hidden");
  // $.post( '/index', $( "#signUpForm" ).serialize() );
})


// userName=reyrey&email=my.name%40gmail.com&password=password
// code to validate signUP info to existing user in database
// console.log($('#signIn').serializeArray());





// variables for LogIn and SignIn Modals
let loginmodal = $('loginModal');
let loginbtn = $('loginbtn');
let loginspan = $('close')[0];
let signinmodal = $('signinModal');
let signinbtn = $('signinbtn');
let signinspan = $('close')[0];

// Opens LogIn Modal
$('#loginbtn').on('click', function(e) {
  $('#loginModal').attr("style", "display: block");
});

// Closes LogIn Modal with X or Window Click
$('#loginspan').on('click', function(e) {
  $('#loginModal').attr("style", "display: none");
});
$(window).on('click', function(e) {
  if (event.target == loginModal) {
    $('#loginModal').attr("style", "display: none");
  }
});

// Opens SignIn Modal
$('#signinbtn').on('click', function(e) {
  $('#signinModal').attr("style", "display: block");
});

// Closes SignIn Modal with X or Window CLick
$('#signinspan').on('click', function(e) {
  $('#signinModal').attr("style", "display: none");
});
$(window).on('click', function(e) {
  if (event.target == signinModal) {
    $('#signinModal').attr("style", "display: none");
  }
});

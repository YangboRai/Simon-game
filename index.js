var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];

var started=false;

var level=0;


$(document).keypress(function() {
  if (!started) {
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$('.btn').on('click', function() {
  var userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
checkAnswer();

});


function checkAnswer(currentLevel){

};


function nextSequence() {

  level++;


  $('#level-title').text('level '+level);
  // generates random number between 0-3
  var randomNumber = Math.floor(Math.random() * 4);
  // generates randomColor based on random number generated
  var randomChosenColour = buttonColors[randomNumber];
  // push randomColor to gamePatter Array
  gamePattern.push(randomChosenColour);
  // Used jquery to select button with the same color ID
  $('#' + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}


function playSound(name) {
  // created audio var to generate random audio sounds depending
  // on the color of button
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');
  setTimeout(function() {
    $('#' + currentColour).removeClass('pressed');
  }, 100);
}

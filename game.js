var gamePattern = [];

var buttonColors = ["red","blue","green","yellow"];

var userClickedPattern = [];


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    
    userClickedPattern.push(userChosenColour);

})

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColors[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}


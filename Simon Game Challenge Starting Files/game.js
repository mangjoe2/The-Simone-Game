
var buttonColour = ["red", "blue", "green", "yellow"];
var gamePatern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColour[randomNumber];
    gamePatern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play(randomChosenColor);
}

nextSequence();




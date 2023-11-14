let buttonColor = ["red","blue","green","yellow"];

let gamePattern = [];
let userClickedPattern = [];

let level = 0;
// let started = false;

// $(document).on("keydown",function(){
//     if(!started){

//     $("h1").text("Level " + level);
//     nextOrder();
//     started = true;
//     }

// });
$(document).one("keydown",function(){
    
    $("h1").text("Level " + level);
    nextOrder();


});

//Detect click and grab its ID and push them into userClickPattern
$("[type=button]").click(function(){

    let clickColor = $(this).attr("id");
    userClickedPattern.push(clickColor);

    playSound(clickColor);
    litUpButton(clickColor);
    
    checkAnswer(userClickedPattern.length-1);
});

// 1. Create a new function called checkAnswer(), it should take one input with the name currentLevel

function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextOrder();
            },1000);
        }
    } else {
        $("body").addClass("game-over");
        $("h1").text("Game over! Try again!");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        playSound("wrong");

        $(document).keydown(function(){
            location.reload();
        });
        
    }

}

//Step 1 create a function nextOrder, to make random numbers from 0 to 3
function nextOrder() {
    userClickedPattern = [];

    //level will add 1 every time players choose the button
    level++;

    //H1 change its level to 1,2,3 etc
    $("h1").text("Level " + level);

    //using Math.random()*4 then Math Floor to create possibility result between 0,1,2,3
    let randomNumber = Math.floor(Math.random()*4);
    let chosenColor = buttonColor[randomNumber];
    gamePattern.push(chosenColor);

    //when the function activated, and gamePattern got push based on chosenColor, blink the color
    $("#" + chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(chosenColor);

    //level adds up every time user click

    
} 


function playSound(name){

    let soundButton = new Audio("./sounds/" + name + ".mp3");
    soundButton.play();
}

function litUpButton(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    },100);
}


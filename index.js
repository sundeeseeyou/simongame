//make All buttons clickable

    let colorArr = ["green","red","yellow","blue"];
    let orderPush = [];

    //make Random pattern

    $("[type=button]").on("click", function(evt) {
        let id = evt.target.id;
        clickButton(id);
        litUpButton(id);
        return orderPush.push(id);
    });


//Make the buttons sound when we click it, based on the color

function clickButton(id){
    switch(id){
        case "red":
            let redSound = new Audio("./sounds/red.mp3");
            redSound.play();
            break;
        
        case "blue":
            let blueSound = new Audio("./sounds/blue.mp3");
            blueSound.play();

            break;
        
        case "yellow":
            let yellowSound = new Audio("./sounds/yellow.mp3");
            yellowSound.play();
            break;
        
        case "green":
            let greenSound = new Audio("./sounds/green.mp3");
            greenSound.play();
            break;

        default:
            console.log(id);
    }
}

//make button light up when click ny adding the pressed class on them


//Wrong button will make a red background effect
function litUpButton(id){
    $("#" + id).addClass("pressed");

    setTimeout(function(){
        $("#" + id).removeClass("pressed");
    },100);
}

//comboButton

function randomColor(){
    let arrayNumber = Math.floor(Math.random() * 4);
    return comboButton(colorArr[arrayNumber]);
}


// Array of level 

function gameLevel (colors){
    let order = [];
    for ( let i = 0 ; i < n ; i++){

        order.push(nextColor);
    }
}

//start the game when keydown or click pressed (go to level i+1) change the #level-title content

// $(document).keydown(function(){

//     return $("#level-title").text("Level" + levelNumber)


// })



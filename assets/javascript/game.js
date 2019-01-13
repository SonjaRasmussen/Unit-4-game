

//Computer Chooses a Random Number
$(document).ready(function(){
    
var randomNum 

//call the reset function
reset();

//Display random number
$('#random-number').text(randomNum);

//create a random number for each crystal 
var num1 = Math.floor(Math.random()*12+1)
var num2 = Math.floor(Math.random()*12+1)
var num3 = Math.floor(Math.random()*12+1)
var num4 = Math.floor(Math.random()*12+1)

//create global variables
var playerTotal = 0;
var wins = 0;
var losses = 0;

$(`#wins`).text(wins);
$(`#losses`).text(losses);

// random integer between min and max
function myrandom(min, max) {
    assert(min < max);
    return Math.floor((Math.random() * (max-min)) + min);
}
//reset the round, new number generated but wins and losses are still accumulating
function resetRound() {
    randomNum = Math.floor((Math.random() * (120-19)) + 19);
    $('#random-number').text(randomNum);
    playerTotal = 0;
    $('#running-total').text(playerTotal);    
}
//Reset the the game, wins/losses are set back to zero
function reset(){
    resetRound();
    num1 = Math.floor(Math.random()*12+1);
    num2 = Math.floor(Math.random()*12+1);
    num3 = Math.floor(Math.random()*12+1);
    num4 = Math.floor(Math.random()*12+1);
    wins = 0;
    losses =0;
    $(`#wins`).text(wins);
    $(`#losses`).text(losses);
}

//click start button to begin a new round of the same game
$('#start-new-game').on('click', reset);

//Clicking on the crystals

function activeGame(num){
    playerTotal = playerTotal + num;
    $('#running-total').text(playerTotal);
   
    
   
    //Win/loss condition
    
    
    if (playerTotal === randomNum){
        win();

    }
        else if (playerTotal > randomNum){
            loss();
            

        }
        
}




 $('#red-crystal').on ('click', function(){
     activeGame(num1);
 })

 $('#blue-crystal').on ('click', function(){
     activeGame(num2);
 })

$('#orange-crystal').on ('click', function(){
    activeGame(num3);
})

$('#green-crystal').on ('click', function(){
    activeGame(num4);
} )   

//display wins
function win(){
   
    wins++;
    $('#wins').text(wins);
    setTimeout(function() {
        alert("Woohoo! You won!");
        resetRound();
    }, 0);
}

//display losses
function loss (){
   
    losses++;
    $('#losses').text(losses);
    setTimeout(function() {
        alert("You blew it!");
        resetRound();
    }, 0);

}
});

//this is my original code, then a much wiser person showed me how to get rid of the reduntant code and make it shorter
//     playerTotal = playerTotal + num1;
//     console.log("newPlayerTotal=" + playerTotal);
//     $('#running-total').text(playerTotal);
//     console.log(playerTotal)
//     console.log($('#running-total').text());
//     //Win/loss condition
//     if (playerTotal === randomNum){
//         win();
//     }
//         else if (playerTotal > randomNum){
//             loss();
//         }
// })

// $('#blue-crystal').on ('click', function(){
//     playerTotal = playerTotal + num2;
//     console.log("New playerTotal= " + playerTotal);
//     $('#running-total').text(playerTotal); 
//         if (playerTotal === randomNum){
//           win();
//         }
//         else if ( playerTotal > randomNum){
//           loss();
//         } 
//   })  
//   $('#orange-crystal').on ('click', function(){
//     playerTotal = playerTotal + num3;
//     console.log("New playerTotal= " + playerTotal);
//     $('#running-total').text(playerTotal);

//           if (playerTotal === randomNum){
//           win();
//         }
//         else if ( playerTotal > randomNum){
//           loss();
//         } 
//   })  
//   $('#green-crystal').on ('click', function(){
//     playerTotal = playerTotal + num4;
//     console.log("New playerTotal= " + playerTotal);
//     $('#running-total').text(playerTotal); 
      
//           if(playerTotal === randomNum){
//           win();
//         }
//         else if ( playerTotal > randomNum){
//           loss();
//         }
//   });






// })














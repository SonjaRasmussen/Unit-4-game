

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
//reset the roung
function resetRound() {
    randomNum = Math.floor((Math.random() * (120-19)) + 19);
    console.log(randomNum)
    $('#random-number').text(randomNum);
    playerTotal = 0;
    $('#running-total').text(playerTotal);    
}
//Reset the the game
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
    console.log("newPlayerTotal=" + playerTotal);
    $('#running-total').text(playerTotal);
   
    console.log(playerTotal)
    console.log($('#running-total').text());
   
    //Win/loss condition
    
    
    if (playerTotal === randomNum){
        win();

    }
        else if (playerTotal > randomNum){
            loss();
            

        }
      console.log()  
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
// function callAlert{
//     if (loss, alert("Yay, you lost!"));

// else{

// }    alert("Yay, you won!");

});
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








// //First actioin is for the computer to randomly chose a number between 19-120
// // var computerChosen;



// //Set up the function to choose a random number and display in the html
// // function randomNum() {
// //     var x = document.getElementById("random-number")
// //     x.innerHTML = Math.floor((Math.random() * (120-19)) + 19);
// //   }
// //link the random number to the start button to display random number

// // $(document).ready(function(){
// //     $("#start-new-game").click(function() {
// //         randomNum()
// //     })
// })

// //User Clicks a Crystal 
// var Crystal ={
//     blue:{
//         name: "Blue",
//         $('#blue').on('click', function(){
//             playerTotal= playerTotal + num1;
//             $('#totalScore').text(playerTotal);

//             if (playerTotal === randomNum){
//                 win();
//             }
//             else if (playerTotal > randomNum){
//                 loss();
//             }
//         })
//     },
//     green:{
//         name: "Green",
//         value: 0
//     },
//     orange:{
//         name: "Orange",
//         value: 0
//     },
//     red:{
//         name: "Red",
//         value: 0
//     },
// };
   





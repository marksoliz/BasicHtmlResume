"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct Number!";

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//from input field
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

 let secretNumber = Math.trunc(Math.random() * 20) + 1;



let score = 20;
let highscore = 0;


//document.querySelector(".number").textContent = secretNumber;
const displayMessage = function (message){
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function(){
 const guess = Number(document.querySelector(".guess").value);
   console.log(guess, typeof guess);
  
   //when there is no input
   if (!guess){
    // document.querySelector(".message").textContent = "🚫 No Number";
     displayMessage("🚫 No Number");
    //when the player wins
   }else if(guess === secretNumber){
    displayMessage("🎉 Correct Number!");
//document.querySelector(".message").textContent = "🎉 Correct Number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if(highscore < score){
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }else{
        document.querySelector(".highscore").textContent = highscore;
    }
   
    //when guess is wrong
}else if(guess !== secretNumber){
    if(score > 1){
        // document.querySelector(".message").textContent = guess >secretNumber ? "📈 Too High!!" : "📉 Too Low!!";
        displayMessage(guess >secretNumber ? "📈 Too High!!" : "📉 Too Low!!");
        score--;
        document.querySelector(".score").textContent= score;

   }
   else{
        displayMessage("😒 Too Bad So Sad, You Lose!!");
        // document.querySelector(".message").textContent = "😒 Too Bad So Sad, You Lose!!";
        score--;
        document.querySelector(".score").textContent= 0;
   }
    
}
//if the guess is too high
//    else if(guess > secretNumber){

//      if(score > 1){
//         document.querySelector(".message").textContent = "Too High!!";
//         score--;
//         document.querySelector(".score").textContent= score;

//    }else{
//         document.querySelector(".message").textContent = "Too Bad So Sad, You Lose!!";
//         score--;
//         document.querySelector(".score").textContent= score;
//    }
    
//    //if the guess is too low
// }else if (guess < secretNumber){
//      if(score > 1){
//         document.querySelector(".message").textContent = "Too Low!!";
//        score--;
//        document.querySelector(".score").textContent= score;
//      }else{
//         document.querySelector(".message").textContent = "Too Bad So Sad, You Lose!!";
//         score--;
//         document.querySelector(".score").textContent= score;
//    }
       
//        }
});


const again = document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent= score;
    document.querySelector("body").style.backgroundColor = "#222";
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...")
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("input").value = "";


});
 


//////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/


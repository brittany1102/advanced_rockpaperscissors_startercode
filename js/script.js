//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
var userChoice="";
var compChoice="";
var winner="";
var choices=["rock","paper","scissors"];


//FUNCTIONS
        function check (){
        compChoice = choices[Math.floor(Math.random()*3)];
        if(userChoice === "rock"){
                if(compChoice === "rock"){
                        winner = "tie";
                }
                else if(compChoice === "scissors"){
                        winner = "user";
                }
                else if(compChoice === "paper"){
                    winner = "comp";   
                }
                
        }
        if(userChoice === "scissors"){
                if(compChoice === "rock"){
                        winner = "comp";
                }
                else if(compChoice === "scissors"){
                        winner = "tie";
                }
                else if(compChoice === "paper"){
                    winner = "user";
                }
                
        }
        if(userChoice === "paper"){
                if(compChoice === "rock"){
                        winner = "user";
                }
                else if(compChoice === "scissors"){
                        winner = "comp";
                }
                else if(compChoice === "paper"){
                    winner = "tie";  
                }
                
        }
        if(winner === "user"){
                $("w").append("You win!");
        }
        else if(winner === "comp"){
                $("w").append("Computer got ya!");
        }
        else if(winner === "tie"){
                $("w").append("It's a tie!");
        }
        }
        }
// DOCUMENT READY FUNCTION
$(document).ready(function() {
        var value = $("#input").val();
        console.log(value);
        $("#rock").click(function(){
                userChoice = "rock"
                check();
        })
        $("#paper").click(function(){
                userChoice = "paper"
                check();
        })
        $("#scissors").click(function(){
                userChoice = "scissors"
                check();
        })
        


});

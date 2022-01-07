"use strict";

let userInput = prompt("Enter a number bigger than 100", "");

if (userInput) {
    while (userInput <= 100) {
        userInput = prompt("Enter a number bigger than 100", "");
    }
    alert("Thank you for freeing me from my eternal pain");
}

else alert("Canceled");

// OR a better one

// let num;

// do {
//     num = prompt("Enter a number bigger than 100", 0);
    
// } while (num <= 100 && num)
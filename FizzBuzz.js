"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function fizzBuzz(number) {
    if ( number <= 0 ) {
        return 0;
    }
    else {
        for (let i = 1; i <= number; i++) {
            if (i % 15 === 0) {
                console.log("FizzBuzz");
            }
            else if (i % 5 === 0) {
                console.log("Buzz");
            }
            else if (i % 3 === 0) {
                console.log("Fizz");
            }
            else {
                console.log(i);
            }
        }
    }
}

function getUserInput(callback) {
    let userInput;


    rl.question("Enter a number: ", (answer) => {
        // rl.on('line', (input) => {
        //     console.log(`input: ${input}`);
        // });

        console.log(`input: ${answer}`);

        rl.close();

        callback(answer);
    });
}

(function play() {
    getUserInput((input) => {
        fizzBuzz(input);
    })

}) ()

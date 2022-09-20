const prompt = require('prompt-sync')({sigint: true});

console.log("This program creates a rigged random dice roll on a six-sided die.  The number you choose will appear twice as often as the other 5 numbers.  Please input the number you would like to be rigged to appear:");
let n = Number(prompt(">> "));
let roll = Math.ceil(Math.random() * 7)
if (n > 0 && n < 7) {
    {if (roll === 7){
        console.log(`Your number is ${n}`);
    }else {
    console.log(`Your number is ${roll}`);
}}
} else  {console.log("Your entry is invalid please try again with a whole number from 1 - 6.")
}
const prompt = require('prompt-sync')({sigint: true});

console.log("This program creates a random dice roll.  Please input the number of sides of the dice you would like to roll:");
let n = Number(prompt(">> "));
if (n > 0) {
    let roll = Math.floor(Math.random() * n)+1;
    console.log(roll);
} else {console.log(
    "Your entry is invalid please try again with a whole number."
);}
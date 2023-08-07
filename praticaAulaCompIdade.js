/*Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.*/

const prompt = require('prompt-sync')({sigint: true});

let myAge = 25;
let yourAge = prompt('Enter your age: ');

if (myAge > yourAge) {
    console.log('I am older than you.');
} else if (myAge < yourAge) {
    console.log('You are older than me.');
}
// Assignment: Tip Calculator
// Explicit:
//     Ask for tip amount
//     Must compute Tip
//     The nLog both tip and total 
//     Can ignore imput validation and assume the user will 
//         enter numbers 

// Implicit:
//     Round digits 
//         Used toFixed
//     Use readlineSync.
//     return results in USD.

// Test:  
//     What is the bill? 200
//     What is the tip percentage? 15

//     The tip is $30.00
//     The total is $230.00

const readline = require('readline-sync');
const decimal = 100;

function prompt(message){
    console.log(message)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

prompt("Tippy tap, it's the tip calculator here to give you the stats.");

prompt("What is the bill?");
let bill = readline.question();

prompt("What is the tip percentage?");
let percentage = readline.question();

const tip = bill * (percentage / decimal);
const total = Number(bill) + Number(tip);

prompt(`The tip is ${formatter.format(tip)} \nThe total is ${formatter.format(total)}`);

// Assignment: Sum or Product of Consecutive Integers;

// Explicit:
//     Ask the user to enter an integer greater than 0;
//     Create two functions;
//         S for Sum to add all the integers between 1 and the user input;
//         P for Product to multiply instead of add;
//     Return the result of one of the two functions;

// Implicit:
//     Assume all integers are correct characters;
//     Convert alphabetical input to be lowercase;

// Prompts:
//     Please enter an integer gerater than 0:;
//     Enter "s" to compute the sum, or "p" to compute product. ;
//     The sum/product of the integers between 1 and "userinput" is "answer";

// Algorithm:
//     const readline-sync;
//     const result = [];
//     function prompt

//     Request for user input;
//     switch statement
//         calls on either function

//     create sum function;
//         loop to user input from 1.;
//         add all integers together;
            // reduce
//         return value;

//     create product function;
//         loop to user input from 1;
//         multiply each interger;
            //reduce
//         return value;

// Test:
//     Sum of 1 and 5 is 15;
//     Product of 1 and 6 is 720;

const readline = require('readline-sync');
let total = [];

function prompt(message) {
    console.log(message);
}

function sum (integer) {
    let result = [];
    const reducer = (acc, element) => acc + element;
    for (let i = 0; i < integer; i++){
        result.push(i)
    }
    total = result.reduce(reducer, integer);
    console.log(`The sum between 1 and ${integer} is ${total}`);
}

sum(6);

function product (integer) {
    let result = [];
    const reducer = (acc, element) => acc * element;
    for (let i = 1; i < integer; i++){
        result.push(i)
    }
    total = result.reduce(reducer, integer);
    console.log(`The product between 1 and ${integer} is ${total}`)
}

product(6)

prompt("Please enter an integer greater than 0:");
let userInput = readline.question();

prompt(`Enter "s" to compute the sum, or "p" to compute product.`);
let funcChoice = readline.question().toLowerCase();

/*if (funcChoice === "s") {
    sum(userInput);
} else if (funcChoice === "p") {
    product(userInput);
} else {
    prompt(`Enter "s" to compute the sum, or "p" to compute product.`)
    funcChoice = readline.question().toLowerCase();
}*/

switch (funcChoice)
{
    case "s":
        sum(userInput);
        break;
    case "p":
        product(userInput);
        break;
    default:
        prompt(`Enter "s" to compute the sum, or "p" to compute product.`)
        funcChoice = readline.question().toLowerCase();
	break;
}

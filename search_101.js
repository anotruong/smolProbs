//Searching 101

// Explicit:
//       Write a problem that solicits six numbers from user;
//       Logs message that describes whether the sixth number appears among
//             the first five;

// Implicit:
//       Put all the answers in an array of five;
//       6th number will determine if the statement is truthy;
//       If the user puts in a non integer answer, ask them to input it again.

// Algorithm:
//       start:
//       6 questions that request user input;
//       exclude 5 into an array.
//       use String.match with RegExp to check if input is correct.
//             separte program?
//       push first 5 answers into an array.
//       use array.includes
//       return String;

const readline = require('readline-sync');
let first_five = [];

function prompt(str) {
  if (str === undefined){
  console.log('Your answer was invalid, please try again.');
  } else {
  console.log(str)
  };
}

function is_a_number(num) {
  num = num.toString();
  return num.match(/\d/g) ? first_five.push(num) : false;
}

let first_num = readline.question('Enter the 1st number: ');

if (is_a_number(first_num) === false) {
  prompt();
  first_num = readline.question('Enter the 1st number: ');
  is_a_number(first_num);
}

let second_num = readline.question('Enter the 2nd number: ');

if (is_a_number(second_num) === false) {
  prompt();
  second_num = readline.question('Enter the 2nd number: ');
  is_a_number(second_num);
}

let third_num = readline.question('Enter the 3rd number: ');

if (is_a_number(third_num) === false) {
  prompt();
  third_num = readline.question('Enter the 3rd number: ');
  is_a_number(third_num);
}

let fourth_num = readline.question('Enter the 4th number: ');

if (is_a_number(fourth_num) === false) {
  prompt();
  fourth_num = readline.question('Enter the 4th number: ');
  is_a_number(fourth_num);
}

let fifth_num = readline.question('Enter the 5th number: ');

if (is_a_number(fifth_num) === false) {
  prompt();
  fifth_num = readline.question('Enter the 5th number: ');
  is_a_number(fifth_num);
}

let last_num = readline.question('Enter the last number: ');

if (!String(last_num).match(/\d/)) {
  prompt();
  last_num = readline.question('Enter the last number: ');
}

let answer = first_five.includes(last_num);

switch (answer) {
  case true:
    prompt(`This number ${last_num} appears in ${first_five}.`);
    break;
  default:
    prompt(`The number ${last_num} does not appear in ${first_five}.`);
    break;
}


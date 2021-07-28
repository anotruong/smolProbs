//How old is Teddy?

// Explicit:
//       Built program;
//       Randomly generates Teddy's age;
//       Logs to console;
//       Random number between 20 and 120 (inclusive);

// Implicit:

// Algorithm:
//       start: numbers?
//       use Math.random between two values.
//       return: String;

//Test:
//Example output => Teddy is 69 years old!

function ageGenerator(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(`Teddy is ${ageGenerator(20, 120)} year olds!`);
//////
// When will I Retire?

// Explicit:
//       Build a program that takes in userInput;
//       Logs when the user will retire and how many more years they have to work
//             till that age;


// Implicit:
//       CurrAge;
//       RetirementAge;
//       Uses the current year;
//             .getFullYear()
//       return difference in years between currage and retirement age;

// Algorithm:
//       Ask for age;
//       Ask for retirememt age;
//       Create variable for current year;
//       log the prompt;

const readline = require('readline-sync');

let age = readline.question('What is your age? ');
let retirement = readline.question('At what age would you like to retire? ');
let retireYear = retirement - age;

let currYear = new Date().getUTCFullYear();

console.log(`It's ${currYear}. You will retire in ${currYear + retireYear}.`);
console.log(`You only have ${retireYear} years of work to go!`);

//Test:
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!
///
// Palindromic Strings prt 1;

// Explicit:
//       Returns true if the argument is a palindrome;
//             false if otherwise;

// Implicit:
//       Upper and lower case matters;
//       numbers include it;
//       flip the word backwards.

// Algorithm:
//       Function one;
//             let arr = []; for group apart the words.
//             Analyze each string with while loop;
//                   the counter = the first index
//                         Second while loop
//                               let char = 2; for the length of the character.
//                               cycles through the rest of the index after 0.

//       Function two;
//             use function one to break apart string.
//             use split(' ').reverse().join('') to see if it equals the argument
//             return true or false.

// function analyzer(word) {
//       let arr = [];
//       let counter = 0;

//       while (counter < word.length){
//             let char = 2;

//             while (char <= word.length){
//                   arr.push(word.slice(counter, char))
//                   char++
//             };
//             char++
//             counter++
//       };
//       return arr;
// }

//I realize now that what the problem was asking for was very simple and I over complicated things
//with my thinking.


function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// Test:
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

////////

// Palindromic Strings prt 2;

// Explicit:
//       Returns true if the argument is a palindrome;
//             false if otherwise;
// ignore all non-alphanumeric characters;
// should be case sensitive;

// Implicit:
// Use RegExp to remove all non w characters.

// Algorithm:
// start: string;
// loop over string;
// push all alphanumeric characters into new array
// join all characters
// ask if the joined characters matched with the characters that were split and rejoined;
// return: Boolean;

function isRealPalindrome(str) {
  str = str.toLowerCase();
  let alphaNum = /\w+/g;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(alphaNum)) {
      arr.push(str[i]);
    }
  }

  return arr.join('') === arr.reverse().join('');

}

// Test:
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

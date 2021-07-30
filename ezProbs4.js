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

//
// Palindromic Numbers

// Explicit:
//       return true if integer is palidromic or false if its not.

// Implicit:
//       Convert to strings;
//       conver back to numbers?

// Algorithm:
//       start: integer;

//       convert integer to str;
//       split().reverse().join() => number

//       return: Boolean;

function isPalindromicNumber(num) {
  let strNum = String(num).split('').reverse().join('');
  console.log(num === Number(strNum));
}

// Test:
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
//////
// Running Totals

// Explicit:
//       Function that takes an array of numbers;
//       Returns an array with the same number of elements
//             but with each element's value being the running total from
//                   original array;

// Implicit:
//       The first value of the number is added to the next value which is
//             then added to the next value;
//       Does this also involve negative numbers?

// Algorithm:
//       start: array;

//       let newArr = [];
//       reduce intial array and push into new array
// while loop;
//       first arr + second arr

//       return: newArray;

// function runningTotal(arr){
//       let result = [];
//       let i = 0;
//       let runner;

//       while (i < arr.length) {
//             if (result.length == 0){
//                   result.push(arr[i]);
//             }else {
//                   runner = Number(arr[i]) + Number(result.slice(-1));
//                   result.push(runner)
//             }

//             i++
//       }
//       return result;
// }


function runningTotal(arr) {
  let result = [];

  let runner = arr.reduce((acc, curr) => {
    acc += curr;
    result.push(acc);
    return acc;
  }, 0);
  return result;
}

// test:
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
////
// Letter Counter Prt 1 & 2

// Explicit:
//       Function that takes a String;
//       consisting of zero ro more space separted words;
//       returns object that shows the number of words of different sizes;


// Implicit:
//       characters that are non-alphanumeric counts in word length;
//       They are organized from smallest integer string to largest;

// Algorithm:
//       create an object;
//             all values set to zero;
// Use RegExp?
//       split up string into separate words;
//       anaylze each words;
//       how to sort answers?
// if statement?
//       two if statements?
//       two fuctions?
//       so three functions in total?
// one function for sorting through the words and the number of characters;

function wordSizes(string) {
  let count = {};
  let array = string.split('');

  let newArr = array.filter(char => {
    if (!char.match(/[-.',!]/g)) {
      return char;
    }
  }).join('').split(' ');

  for (let i = 0; i < newArr.length; i++) {
    let wordLength = newArr[i].length;
    if (wordLength === 0) {
      continue;
    }

    if (!count[wordLength]) {
      count[wordLength] = 0;
    }

    count[wordLength] += 1;
  }

  return count;
}


// Test:
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
///////
// Letter Swap

// Explicit:
//       Function that swaps the first and last letter of every word;
//       We may assume the strings are normal;

// Implicit:
//       is not case sensitive;

// Algorithm:
//       start: String;

//       Use .split(' ');
//       loop over each word;
//             focus on the array;

//             loop over it again.
//             focus on the elements;

//       return: string;

function swap(string) {
  let newStr = [];
  let arr = string.split(' ');
  let idx = 0;

  if (string.length === 1) {
    return string;
  }

  while (idx < arr.length) {

    newStr.push(arr[idx].slice(-1) + arr[idx].slice(1, -1) + arr[idx][0]);
    idx++;
  }

  return newStr.join(' ');
}


// test:
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

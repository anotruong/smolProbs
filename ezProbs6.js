//prob1//

function repeater(str) {
/*  let newStr = '';

  for (let idx = 0; idx < str.length; idx++) {
    newStr += str[idx] + str[idx];
  }

  return newStr
*/
  let newStr = '';
  str = str.split('').forEach(element => {
     newStr += String(element) + String(element)
    });

  return newStr;
}

//test:
let greets = 'Hello'
console.log(repeater(greets));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
console.log(greets);

//ezProbs 2//
function doubleConsonants (string) {
  const notThese = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',
        '0', '1', '2', '3', '4', '5', '6',' 7', '8', '9', '-', '!', ' ']

  return string.split('').map(char => {
  if (!notThese.includes(char)) {
    return char + char
   } else {
    return char
   }
 }).join('');

}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

//Probs 3//
function reverseNumber (number) {
/*  let array = [];
  number = String(number).split('')

  for (let idx = number.length -1; idx >= 0; idx--) {
    array.push(number[idx]);
  }

  return Number(array.join(''));*/

  let reverseNum = Number(String(number).split('').reverse().join(''));

  return reverseNum;
}


console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros$
console.log(reverseNumber(1));        // 1


//prob 4//
function centerOf (str) {
//  let idx = 0;
  let length = str.length
//  let middleChars = '';

/*  if (length % 2 === 1) {
    idx += Math.floor(length / 2);
    middleChars = str[idx];
  } else {
    idx += length / 2;
    let secondIdx = idx - 1;
    middleChars = `${str[secondIdx]}${str[idx]}`;
  }

  return middleChars; */

  if (length % 2 === 1) {
    return str[Math.floor(length / 2)];
  } else {
    let centerLength = length / 2 - 1;
    return str.substring(centerLength, centerLength + 2);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

//prob5//

function negative(num) {
  num = Math.abs(num) * -1;

  return num
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0


//prob 8 //

function sequence (count, integer) {
  let arr = [];

  for (let increment = 1; increment <= count; increment++) {
    arr.push(integer * increment);
  }

  return arr;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

//prob 9//

function reverseSentence (str) {
  let newStr = str.split(' ').reverse().join(' ')
  return newStr;
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

//prob 10//

function reverseWords (str) {
  return str.split(' ').map(element => {
      if (element.length >= 5) {
        return reversedWords(element);
      } else {
        return element;
      }
  }).join(' ');
}

function reversedWords (word) {
  return word.split('').reverse().join('');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

// prob11//

function reverse (arr) {
  let leftSide = 0;
  let rightSide = arr.length - 1;

  while (leftSide < rightSide / 2) {
   [arr[leftSide], arr[rightSide]] = [arr[rightSide], arr[leftSide]];

  leftSide++;
  rightSide--;
  }

  return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

//prob 12//
function isBalanced (str) {
  let parenthesisCounter = 0;
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === '(') {
      parenthesisCounter += 1;
    } else if (str[idx] === ')') {
      parenthesisCounter -= 1;
    }

    if (parenthesisCounter < 0) return false;
  }

  return parenthesisCounter === 0;
}
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);


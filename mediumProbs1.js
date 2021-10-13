//probs 1//
function rotateArray (arr) {
  if (!Array.isArray(arr)) return undefined;

  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

//prob2//
function rotateRightmostDigits (digit, idx) {
  let num = String(digit).slice(-idx, -idx + 1);
  let alteredDigit = String(digit).replace(num, '');
  return Number(alteredDigit.concat(num));
}

//test:
  console.log(rotateRightmostDigits(735291, 1));      // 735291
  console.log(rotateRightmostDigits(735291, 2));      // 735219
  console.log(rotateRightmostDigits(735291, 3));      // 735912
  console.log(rotateRightmostDigits(735291, 4));      // 732915
  console.log(rotateRightmostDigits(735291, 5));      // 752913
  console.log(rotateRightmostDigits(735291, 6));      // 352917

//prob 3//
function maxRotation(num) {
  let counter = String(num).length;

  while (counter > 0) {
    num = rotateRightmostDigits(num, counter);
    counter -= 1;
  }

  return num;
}

//test:
console.log(maxRotation(735291));      // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets drop$
console.log(maxRotation(8703529146));    // 7321609845

//prob 4//
function minilang(program) {
  let stack = [];
  let register = 0;
  program.split(" ").forEach(token => {
    switch (token) {
      case "ADD":
        register += stack.pop();
        break;
      case "DIV":
        register = Math.floor(register / stack.pop());
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "REMAINDER":
        register = Math.floor(register % stack.pop());
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "PUSH":
        stack.push(register);
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        register = Number(token);
    }
  });
  return register;
}

//prob5//
const WORD_NUM = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

function wordToDigit (str) {
  Object.keys(WORD_NUM).map((word) => {
    let re = new RegExp(word, 'gi');
    str = str.replace(re, WORD_NUM[word]);
  });

  return str;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

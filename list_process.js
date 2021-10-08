//prob 1//

const sum = integer => String(integer).split('')
                                      .reduce((acc, curr) => acc + Number(curr), 0);

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

//prob 2//
const ENG_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
              'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
            'fourteen', 'fifthteen', 'sixteen', 'seventeen', 'eighteen',
            'nineteen']

function alphabeticNumberSort (arr) {
  let engObj = {};
  let newArr = [];

  arr.forEach(num => engObj[ENG_WORDS[num]] = num);

  Object.keys(engObj).sort().forEach(key => newArr.push(engObj[key]));

  return newArr;
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


//prob 3//

function multiplyAllPairs(arr1, arr2) {
  let comboArr = [];

  arr1.forEach(num => arr2.forEach(num2 => comboArr.push(num * num2)));

  return comboArr.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 1$

//prob4//
function leadingSubstrings(str) {
  return str.split('').reduce((arr, _, idx) => {
      arr.push(str.slice(0, idx + 1));
      return arr;
      }, []);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//prob5//
function leadingSubstrings(str) {
  let substrings = [];

  for (let length = 1; length <= str.length; length++) {
    substrings.push(str.slice(0, length));
  }

  return substrings;
}

function substrings(word) {
  let arr = word.split('');
  let result = arr.map((ele, idx) =>
                leadingSubstrings(arr.slice(idx).join(""))).flat();
  return result;
}

//prob 6// uses previous functions in probs 4-5 

function palindromes (phrase) {
  return substrings(phrase).filter(word => {
    if (word.split('').reverse().join('') === word) {
      if (word.length > 1) {
      return word;
      }

    }
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]
console.log(palindromes('knitting cassettes'));

//prob 7//

function sumOfSums(integer) {
  let sums = [];
  for (let idx = 1; idx <= integer.length; idx++) {
    sums.push(integer.slice(0, idx));
  }
  return sums.flat().reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 $
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

//prob8//
function buyFruit (arr) {
  return arr.map(fruit => repeatProduce(fruit)).flat();
}

function repeatProduce (produce) {
  let produceName = produce[0];
  let numOfRepeats = produce[1];
  let result = [];

  for (let idx = 0; idx < numOfRepeats; idx++) {
    result.push(produceName);
  }
  return result;
}

/*function buyFruit(arr) {
  let fruityArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    for (let jdx = 0; jdx < arr[idx][1]; jdx++) {
      fruityArr.push(arr[idx][0]);
    }
  }
  return fruityArr;
}
*/
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

//prob 9//
function transactionsFor(productCode, list) {
  return list.filter(object => productCode === object['id']);
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

//probs 10//
function isItemAvailable(item, inventory) {
  let filteredList = transactionsFor(item, inventory);
  let available = 0;
  let unavailable = 0;
  filteredList.forEach(object => {
    if (object.movement === 'in') {
      available += object.quantity;
    } else {
      unavailable += object.quantity;
    };
  });

  return (available > unavailable) ? true : false;
}


//prob 1//
function dms(number) {
  let strNum = String(number).split('.');
  let degree = parseFloat(strNum[0]);
  let minutes = Math.floor(60 * (number - degree));
  let seconds = Math.round((60 * (number - degree) - minutes) * 60);

  if (minutes < 10) {minutes = "0" + minutes};
  if (seconds < 10) {seconds = "0" + seconds};

   return `${degree}°${minutes}'${seconds}"`;
}

//test:
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"


//prob 2//

function union(array1, array2) {
  let newArray = array1.concat(array2);
  let strIdx = 0;

  while (strIdx < newArray.length) {

    let secondIdx = 1 + strIdx;

    while (secondIdx < newArray.length) {
      console.log(newArray[strIdx], newArray[secondIdx]);

      if (newArray[strIdx] === newArray[secondIdx]) {
        newArray.splice(newArray[secondIdx], 1);
      }

      secondIdx++;
    };

    strIdx += 1;
  }

  return newArray;
}

//test:
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]


//prob 3//

function halvsies (arr) {
  let newArray = [];

  if (arr.length % 2 === 1) {
    newArray.push(arr.slice(0, 3), arr.slice(3));
  } else if (arr.length % 2 === 0) {
    newArray.push(arr.slice(0, 2), arr.slice(2));
  }

  if (arr === []) {newArray.push(arr, arr)};

  return newArray;
}

//refactor later using Math.ceil

//test:
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]



//prob4//

function findDup(array) {
  let duplicate = {};
/*let idx = 0;

  while (idx < array.length) {

    let doublesIdx = 1 + idx;

    while (doublesIdx < array.length) {
      if (array[idx] === array[doublesIdx]) {
        duplicate.push(array[doublesIdx]);
      }

      doublesIdx++;
    }
    idx++;
  }
*/
  let idx = 0;

  while (idx < array.length) {
    if (duplicate[array[idx]]) {
      return array[idx];
    } else {
      duplicate[array[idx]] = true;
    }

    idx++;
  }

  return undefined;
}

//test:
console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
  7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73


//prob 5//

function interleave(arr1, arr2) {
/*  let result = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    result.push(arr1[idx], arr2[idx]);
  }

  return result; */
  let result = [];

  arr1.forEach((_, idx) => {
    result.push(arr1[idx], arr2[idx]);
  });

  return result;
}

//test:
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

//prob 6//

function multiplicativeAverage (arr) {
  let total = arr.slice().reduce((acc, curr) => acc * curr, 1) / arr.length;

  return String(total.toFixed(3));
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"


//prob7//

function multiplyList(arr1, arr2) {
//reduce//
  return arr1.reduce((arr, value, idx) => {
    arr.push(value * arr2[idx]);
    return arr;
  }, []);

  //for loop//
  let result = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    result.push(arr1[idx] * arr2[idx]);
  }

  return result;

  //forEach/map//
  let total = [];

  arr1.map((element, idx) => {
    total.push(element * arr2[idx]);
  });

  return total;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

//prob 8//

digitList = number => { return String(number).split('').map((element) => {
    return parseInt(element, 10);
  })
};

//test:
  console.log(digitList(12345));       // [1, 2, 3, 4, 5]
  console.log(digitList(7));           // [7]
  console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
  console.log(digitList(444));         // [4, 4, 4]

//prob 9//

function countOccurrences(car) {
  let carCounter = {};

  for (let idx = 0; idx < car.length; idx++) {
    carCounter[car[idx]] = carCounter[car[idx]] || 0;
    carCounter[car[idx]] += 1 || 1;
  };

  /*car.forEach(element => {
    if (carCounter[element] !== element) {
      carCounter[element] += 1;
    }
  });*/

  logOccurences(carCounter);
}

function logOccurences (numberOfTimes) {
   for (const prop in numberOfTimes) {
    console.log(`${prop} => ${numberOfTimes[prop]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

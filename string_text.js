//prob1//
function isUppercase (str) {
  return str === str.toUpperCase();
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

//probs2
function removeVowels (arr) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  return arr.map(str => str.split('').filter(char => !vowels.includes(char)).join($

}
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklm$
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLL$
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "$

//probs 3//

function letterCaseCount (str) {
  let regex = /[a-z]/gi;
  let specialStr = str.replace(regex, "").split('');
  let countObj = {lowercase: 0, uppercase: 0, neither: specialStr.length};

  str.split('').forEach(char => {
    if (char === char.toLowerCase() && !specialStr.includes(char)) {
      countObj.lowercase += 1;
    } else if ( char === char.toUpperCase() && !specialStr.includes(char)) {
      countObj.uppercase += 1;
    }
  });

  return countObj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

//prob 4
function wordCap (str) {
  return str.split(' ').map(word =>
         word.slice(0, 1).toUpperCase() + word.substring(1).toLowerCase())
         .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

//prob5//
function swapCase (str) {
  let lowercase = /[a-z]/g;
  let uppercase = /[A-Z]/g;

  return str.split('').map(char => {
    if (char.match(lowercase)) {
      return char.toUpperCase();
    } else if (char.match(uppercase)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapCase('CamelCase')); // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"

//prob6//

function staggeredCase (str) {
  return str.split('').map((char, idx, arr) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUm$

//prob 7//
function staggeredCase(string) {
  let counter = 0;
  let specialChar = /[\s\t\r\n\f\d]/gi;

  return string
    .split("")
    .map((char, index) => {
      if (!char.match(specialChar)) {
        if (counter % 2 === 0) {
          counter++;
          return char.toUpperCase();
        } else {
          counter++;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");

//prob 8//
const wordLengths = string => {
  if (string !== undefined && string !== '') {
      return string.split(' ').map(word => word + ' ' + word.length);
    } else {
      return []
    }
  };

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []


//prob 9//
function searchWord (str, text) {
  const regex = new RegExp(`\\b${str}\\b`, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptate$

console.log(searchWord('sed', text));      // 3

//prob 10//

function searchWord (str, text) {
  const regex = new RegExp(`\\b${str}\\b`, 'gi');
  return text.replace(regex, `**${str.toUpperCase()}**`);
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem a$

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusan$




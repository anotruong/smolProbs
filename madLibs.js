// Madlibs Program

// Explicit:
//       create a funny story template;
//       ask for 4 arguments ;
//             noun, verb, adjective, adverb;

//       make a funny sentence 

// Implicit:
//       Make the user feel welcomed;
//       multiple programs 
      // Each sentence is a new line. 

// Algorithm:
//       Welcome Users;
//       Ask for noun, verb, adjective, adverb;

//       return story.

const readlineSync = require('readline-sync');

function prompt(msg) {
      console.log(msg)
};

function cap(word) {
      return word[0].toUpperCase() + word.substring(1);
};

prompt('Welcome friends to the Madlib ad lib~');

let noun = readlineSync.question('Enter a noun: ').toLowerCase();

let verb = readlineSync.question('Enter a verb: ').toLowerCase();

let adj = readlineSync.question('Enter an adjective: ').toLowerCase();

let adverb = readlineSync.question('Enter an adverb: ').toLowerCase();

prompt(`I am the infamous super villan, ${cap(adj)} ${cap(noun)}!`);
prompt(`My ability to ${adverb} ${verb} is second to none.`);
prompt(`Dare I say, I am the most ${adverb} kind of fella.`);
prompt(`Enjoy your day citizens of Townsville, for I, ${cap(adj)} ${cap(noun)} am always in the shadows`);


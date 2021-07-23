// Fibonacci Number Location by Length

// Explicit:
//       One Function;
//       Calculates returns the index of the first Fibonacci Number
//             that has the number of digits specified by the argument ;
//       The first Fibonacci number has an index of 1;


// Implicit:
//       the input represents the number placement. 
//             2 = tens;
//             3 = 100s
//       The number on the end of === is the index 
              // 1 1 2 3 5 8 13
//             [0, 1, 2, 3, 4, 5, 6] = 7

// Algorithm:
//       Start: Integer

//       One argument 
//       Needs to add itself 

//       How to recognize numbers?
//       assign a list 
//       2: 10
//       3: 100
//       4: 1000
//       5: 10000

//       2-1 = 1 zero
//       firstIdx = 1;
//       acc =  0;
//       fib = [1];

//       reducer = (acc, curr) => {
//             fib.push(acc + curr, 0);
//       }
      // firstIdx + acc = 1 (1 interation)
      // then fib.push(firstIdx + acc).
      // [1, 1,]

      // acc += 1
      // firstIdx =

      // 2 + Array.length 

      // counter has to be <= the zeros 

      // Return: The index of the first Fibonacci number 
      //       specific to the argument.  

// function findFibonacciIndexByLength(integer) {
//       const rounds = 10n**(integer - 1n);
//       let counter = 0n;
//       let fibArr = [1n]
//       let result = [];
//       let strIdx = 1n;

//       while (counter <= rounds) {

//             result = BigInt(strIdx) + BigInt(counter);

//             fibArr.push(result);
//             strIdx = fibArr.slice(-2, -1)
//             counter = result;
//       };

//       return BigInt(fibArr.length);
// };


function findFibonacciIndexByLength(length) {
      let first = 1n;
      let second = 1n;
      let fibonacci;
      let count = 2n;

      do {
            fibonacci = first + second;
            count += 1n;
            first = second;
            second = fibonacci;

      } while (String(fibonacci).length < length);

      return count;
};

// // Test:
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);



// The last example may take a minute or so to run.

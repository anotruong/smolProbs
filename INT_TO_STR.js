function integerToString(num) {

    const strObj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let result = '';
    
    //turns out we need to use a do/while loop
    // what is the remainder? 
    do {

    let remainder = num % 10;
    num = Math.floor(num / 10);
    
    // strObj[remainder] is in front of result because the numbers
    // needed to be added from right to left

    result = strObj[remainder] + result;
    } while (num > 0);

    return result;
};

// Explicit:
    // write a new function that uses the integerToString Function
    // if the integer if the integer is positive, add a positive symbol 
    // same if it's negative. 
    // Use Math.sign()

// Implicit:
  


// Algorithm:
    // start function
    // evaluate if the number is negative or positive 
    // if it's negative return minus sign in front 
    //     ternary operator?
    //     Math.sign(num) ? "+" + result : "-" + result 

function signedIntegerToString(int) {
    switch (Math.sign(int)) {
        case -1:
            int = int * -1;
            return `-${integerToString(int)}`;
        case 1:
            return `+${integerToString(int)}`;
        default:
            return `${integerToString(int)}`;
    };
    // if (Math.sign(int) === -1) {
    //     int = int * -1
    //     return "-" + integerToString(int);
    // } else if (Math.sign(int) === 1){
    //     return "+" + integerToString(int);
    // } else {
    //     return "0";
    // }
}

// let tester = 356
// let secondT = -1;
// console.log(Math.sign(tester) === -1)

// Test:
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");


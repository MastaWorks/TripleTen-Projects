// Challenge 1: Even numbers
console.log("CHALLENGE #1");
// Write a function printEven(n) that accepts a number n as input and logs out all the even numbers between 1 and N to the console.

function printEven(n) {
  for (let i = 1; n >= i; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEven(10);

// Challenge 2: Leap Year
console.log("\nCHALLENGE #2");
// In an earlier task you wrote some logic to determine if a year is a leap year. However, this logic was not complete, because not every year that is divisible by 4 is a leap year. A year is a leap year if it is:

// divisible by 400, or
// divisible by 4 and not divisible by 100
// Create a function isLeapYear() that determines if a given year is a leap year or not. The function should take an argument year and return true if it’s a leap year or false if it’s not.

// Use the AND (&&) and OR (||) Boolean operators.

function isLeapYear(year) {
  /* add your code */
  let isLeap;
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return (isLeap = true);
    console.log(isLeap);
  } else {
    return (isLeap = false);
    console.log(isLeap);
  }
}

console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2022)); // Output: false
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2000)); // Output: true

// Challenge 3: FizzBuzz
console.log("\nCHALLENGE #3");
// Write a function fizzBuzz(n) that accepts a natural number as an argument. The function should put numbers from 1 to n to the console with the following replacements:

// numbers that are multiples of three are replaced by the word Fizz
// numbers that are multiples of five are replaced by the word Buzz
// numbers that are multiples of both three and five are replaced by FizzBuzz

function fizzBuzz(n) {
  // write your code here
  for (let i = 1; n >= i; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
// fizzBuzz(100);

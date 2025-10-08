//EXERCISE 1
console.log("EXERCISE 1");

let counter = 0;

function increaseCounter() {
  counter++;
}

// Call the function 3 times
increaseCounter();
increaseCounter();
increaseCounter();

console.log(counter);

// Call the function 10 times in a for loop
for (let i = 0; i < 10; i++) {
  increaseCounter();
}

console.log(counter);

//EXERCISE 2
console.log("EXERCISE 2");

let year = 2020;

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && !(year % 100 === 0))) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is a non-leap year.");
}
};

isLeapYear(2012);

//EXERCISE 3
console.log('EXERCISE 3');

// Now it’s time for you to write a function from scratch! Write a function called calculateArea. This function should accept two arguments representing the length and width of a rectangle. The function's body should calculate its area using the formula length * width, and log the result to the console.

// Declare the calculateArea function

function calculateArea(num1, num2){
  console.log(num1 * num2);
}

calculateArea(5, 10); // 50
calculateArea(10, 5); // 50
calculateArea(3, 3); // 9

//Returning Result/Output rather than just printing it out on the console

function isLeapYear2(year) {
  if (year % 400 === 0 || (year % 4 === 0 && !(year % 100 === 0))) {
    return true;
  } else {
    return false;
  }
}

let checkedResult = isLeapYear2(2020);
console.log(checkedResult);

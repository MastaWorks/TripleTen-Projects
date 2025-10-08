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

if (year % 400 === 0 || (year % 4 === 0 && !(year % 100 === 0))) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is a non-leap year.");
}

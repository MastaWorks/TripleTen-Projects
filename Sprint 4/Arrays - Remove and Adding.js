//Exercise 1
console.log("EXERCISE 1");

// If you've ever flown on an airplane, you've definitely passed security checks. Perhaps you remember putting your phone in a special basket before passing through the metal detectors.

// Let’s imagine that this basket is a JavaScript array. We’ll simulate putting the phone into it and then picking it up by using the push() and pop() methods. First, push the phone into screeningBin and print screeningBin to the console — it should contain the string iPhone. After that, pop the phone out and print screeningBin to the console again, but this time, it should be an empty array.

const phone = "iPhone";
const screeningBin = [];

screeningBin.push(phone);

console.log(screeningBin);

screeningBin.pop();

console.log(screeningBin);

//EXERCISE 2
console.log("EXERCISE 2");

const numbers = [35, 3, 21, 32, 54, 69, 85, 61, 88, 68];
const evenNumbers = [];
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  } else {
    oddNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);
console.log(oddNumbers);

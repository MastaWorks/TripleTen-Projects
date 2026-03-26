stw//EXERCISE #2

// Brendan is organizing an event that has specific admission criteria. To enter, a person must be:

// At least 18 years old AND have a valid ticket.
// Brendan needs to write a program that will check the attendee’s age and make sure they have a ticket. He is given two variables: age (a number) and hasTicket (a boolean). Use an if and else statement with a logical operator to determine if the person can enter the event.

// Here are the provided output messages:

// If the attendee is eligible to attend the event, print the message: "Welcome! Have fun!"
// If the attendee is NOT eligible, print the message: "Sorry you cannot enter."

const age = 18;
const hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("Welcome! Have fun!");
} else {
  console.log("Sorry you cannot enter.");
}

//EXERCISE #3

// Add an else statement to tell the program what to do if the value of the year variable is a non-leap year.

// Make the console print "XXXX is a non-leap year." For example: 2009 is a non-leap year.

let year = 2019;

if (year % 4 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is a non-leap year.");
}

//EXERCISE #4

// Use a for loop to iterate from 1 to 100 inclusive. The loop should also print the following to the console: the current number and whether it’s an even or odd number. Use this format:

// n is odd
// n is even

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

//EXERCISE #2

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

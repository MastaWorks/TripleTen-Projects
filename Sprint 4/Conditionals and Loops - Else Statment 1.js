//EXERCISE #3

// Add an else statement to tell the program what to do if the value of the year variable is a non-leap year.

// Make the console print "XXXX is a non-leap year." For example: 2009 is a non-leap year.

let year = 2019;

if (year % 4 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is a non-leap year.");
}

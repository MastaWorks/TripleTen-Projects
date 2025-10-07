//EXERCISE #1
console.log('EXERCISE 1');

// There’s an array of student names in the code. These students are all from Cohort 30.

// Print each name to the console followed by the cohort name. Use string concatenation to add the cohort number after each name:

// The output should look like this:

// Yasmin Cohort 30
// Elise Cohort 30
// Terry Cohort 30
let students = ["Yasmin", "Elise", "Terry"];

for(let i = 0; i < students.length; i++){
    console.log(students[i] + ' Cohort 30.');
}

//EXERCISE #2
console.log('EXERCISE 2');

// There is an array of numbers. Calculate the sum of all numbers inside the array. Print the final result to the console.

const numbers = [-35, 3, -21, 32, -54, -69, 85, 61, 88, 68];

let result = 0;

for(let i = 0; i < numbers.length; i++){
  
  result += numbers[i];
  
}

console.log(result);

//EXERCISE #3
console.log('EXERCISE 3');

// Max is a sound engineer, and he’s recording a band. The musicians provided a list of songs and their lengths in minutes. Max told them the maximum recording length is 40 minutes. The band approved and asked Max to record the maximum number of songs in the listed order.

// For each song in the list, if it can be added to the record without making the total recording time exceed the maximum, it should be added. Otherwise, the song should be omitted.  The musicians also asked Max to let them know the final record length and the number of songs. 

// Help Max to record using the for or for…of loop. Print the resulting record length and the number of songs to the console.

const songLengths = [4, 7, 5, 6, 3, 8, 5, 4, 6, 3];
const maxRecordLength = 40;

let recordLength = 0;
let songsOnRecord = 0;

for (let songLength of songLengths) {
  if (recordLength + songLength > maxRecordLength) {
    continue;
  }

  recordLength += songLength;
  songsOnRecord += 1;
}

console.log(recordLength);
console.log(songsOnRecord);
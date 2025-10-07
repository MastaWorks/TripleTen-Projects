//EXERCISE 1
console.log("--EXERCISE 1--");
// Create a variable named morningList and make it an array of morning activities by adding the following strings:
// "Get out of bed"
// "Brush teeth"
// "Scroll through social media"
// "Have breakfast"
// Print the resulting array to the console.


let morningList = ['Get out of bed', 'Brush teeth', 'Scroll through social media', 'Have breakfast'];

console.log(morningList);

//EXERCISE 2
console.log("--EXERCISE 2--");

// Print the first element
console.log(morningList[0]);
// Print the last element
console.log(morningList[morningList.length - 1]);

//EXERCISE 3
console.log("--EXERCISE 3--");

let morningList2 = [
  'Get out of bed',
  'Brush teeth',
  'Scroll through social media',
  'Have breakfast'];

// Add more code here without changing the definition of the array
morningList2[2] = 'Exercise';
morningList2[morningList2.length] = 'Wash dishes';

console.log(morningList2);
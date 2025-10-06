//EXERCISE #1

// Jenny was given the task of buying groceries. After buying everything she needed, Jenny had $15 left and wanted to go through all the racks of sweets, taking one of each type for herself.

// A candy costs $2. Jenny does not have enough money to buy all the sweets in the store. Use a while loop to print how many candies Jenny bought.

// Each time Jenny buys a candy, print Jenny bought n candies to the console, where n is the cumulative total of candies Jenny bought as of the current iteration. After exiting the loop, print to the console the amount of money (if any) that Jenny has left.

const candyPrice = 2;
let candiesBought = 0;
let moneyLeft = 15;

while (moneyLeft >= candyPrice) {
  candiesBought += 1;
  console.log(`Jenny bought ${candiesBought} candies`);

  moneyLeft -= candyPrice;
}

console.log(moneyLeft);

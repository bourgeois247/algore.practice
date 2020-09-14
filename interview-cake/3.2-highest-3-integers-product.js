'use strict'
/**
 * Interview Cake Practice 3.2
 * Challenge Title: Highest Product of 3
 * Challenge URL: https://www.interviewcake.com/question/javascript/
 * product-of-other-numbers?course=fc1&section=greedy
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(3)
 * 
 * @param {array} intArray 
 */
function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Exception('At least three items are required to find the highest product');
  }

  // keep track of the three highest numbers
  let highestNums = [];

  // find the total number of negative values
  let totalNegativeNums = arrayOfInts.reduce((accum, item) => (item < 0) ? accum + 1 : accum, 0);

  // loop through to find others and update accordingly
  for (let index = 0; index < arrayOfInts.length; index++) {
    // if total negatives is even, we use the absolute value of each number
    const num = totalNegativeNums % 2 === 0 ? Math.abs(arrayOfInts[index]) : arrayOfInts[index];
    let temp;

    if (highestNums.length < 3) {
      highestNums = [...highestNums, num];
      continue;
    }

    // update our refs to the possible highest numbers
    if (num > highestNums[0]) {
      temp = highestNums[0];
      highestNums[0] = num;
    } else if (num > highestNums[1]) {
      temp = highestNums[1];
      highestNums[1] = num;
    } else if (num > highestNums[2]) {
      temp = highestNums[2];
      highestNums[2] = num;
    }

    // if the number that was updated was larger than the lowest, update with temp
    const lowestHighestNum = Math.min(...highestNums);
    const lowestHighestNumIndex = highestNums.indexOf(lowestHighestNum);
    highestNums[lowestHighestNumIndex] = temp > highestNums[lowestHighestNumIndex]
      ? temp
      : highestNums[lowestHighestNumIndex];
  }

  // return the product of all 3 numbers
  return highestNums.reduce((accum, item) => (item * accum), 1);
}

console.log(highestProductOf3([-10, 1, 3, 2, -10]));
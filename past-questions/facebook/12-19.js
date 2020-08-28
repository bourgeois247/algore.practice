'use strict';
/**
 * ------------
 * Challenge 1
 * ------------
 * 
 * Given an array of strictly integers
 * 
 * const A = [2, 3, 5]
 * 
 * Produce an output array with all multiplied except current element in array[i]
 * 
 * E.g const output = [3 * 5, 2 * 5, 2 * 3];
 */

const A = [2, 3, 5];

/**
 * My onsite attempt
 * 
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */
function dumbAttempt() {
  let result = [];

  A.forEach((item, index) => {
    let multiplier = 1;

    A.forEach((itemInner, indexInner) => {
      if (index !== indexInner) {
        multiplier *= itemInner;
      }
    });

    result = [...result, multiplier];
  });

  return result;
}


/**
 * New saner attempt
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function sanerAttempt() {
  let result = [];
  let product = A.reduce((accum, next) => accum * next, 1);

  A.forEach(item => {
    result = [...result, (product / item)];
  });

  return result;
}

console.log(sanerAttempt());
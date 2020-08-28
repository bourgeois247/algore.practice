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
 * 
 * 
 * It's space complexity is O(n) because the new array we create, is the
 * exact same size as the input array, so total space this function takes up
 * in memory will be O(n)[of the input array] + O(n)[of the output array].
 * This gives us 2O(n). We can ignore constants with big O, since we're only interested
 * in the "core" expression of efficiency in terms of the input size, "n".
 * Final space complexity: O(n)
 * 
 * 
 * It's O(n^2) complexity because for each element in the array(line 29)
 * we're looping through the same array again. In mathematical terms,
 * if n = number of elements in A
 * we're accessing each element n, n times. Diagramatically,
 * 
 * when n = 0 on line 49, inside we loop this many times => o o o 
 * when n = 1                                            => o o o
 * when n = 2                                            => o o o
 * when n = 3, the loop ends, and we return the result.
 * 
 * From this we see total number of "o" operations is 9 => 3 x 3, where n = 3.
 * We can do better than this.
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
 * Space complexity: O(n)
 * 
 * 
 * Time complexity is now O(n) because if we examine the operations here
 * Product takes O(n) time since it has to traverse the 
 * entire array to multiple all it's values.
 * 
 * Then we loop through the array one more time, and divide by the product by each element.
 * This is another O(n) time.
 * 
 * The combination of both operations is therefore O(n) + O(n) = 2O(n).
 * As explained above, the constant can then be ignored to give O(n) overall.
 * 
 * Yay!
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
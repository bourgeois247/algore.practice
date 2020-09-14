'use strict'
/**
 * Interview Cake Practice 3.3
 * Challenge Title: Product of Other Numbers
 * Challenge URL: https://www.interviewcake.com/question/javascript/
 * product-of-other-numbers?course=fc1&section=greedy
 * 
 * E.g Given [2, 3, 5]
 * Output [3*5, 2*5, 3*5]
 * 
 * Caveat: Do not use division!!!
 *
 * Time Complexity: 
 * Space Complexity: 
 * 
 * @param {array} intArray 
 */
function getProductsOfAllIntsExceptAtIndex(intArray) {
  /*
   * Given an array inpy: [3, 5, 7, 9], then
   * Item [0]: [[1] * [2] * [3]]
   * Item [1]: [[0] * [2] * [3]]
   * Item [2]: [[0] * [1] * [3]]
   * Item [3]: [[0] * [1] * [2]]
   * 
   * 
   * So in general, each item is arrived at by multiplying
   * the items before it and after it. If we create an array of multiplied
   * values before each element, it'll look like:
   * 
   * 
   * [1, 3, 3*5, 3*5*7] = [1, 3, 15, 105]
   * We use 1 as the first element, because nothing comes before it
   * and we're going to multiply that value with the first value in the
   * [product of value after index] array. Hence we can't use 0, or we lose our value.
   * 
   * 
   * For numbers after each element,
   * [5*7*9, 7*9, 9, 1] = [315, 63, 9, 1]
   * We use 1 because it's the last element, and nothing comes after it.
   * Similar to the above, we'd multiply it with the corresponding value in
   * the product of numbers before index.
   * 
   * Finally, putting it all together
   * [1, 3, 15, 105] * [315, 63, 9, 1] = [315, 189, 135, 105]
   */

  let result = [1];

  // populate each index with the product of numbers BEFORE that index
  for (let index = 1; index < intArray.length; index++) {
    result.push(result[result.length - 1] * intArray[index - 1]);
  }

  // multiply each index with the product of numbers AFTER that index
  let multiplier = 1;
  for (let index = intArray.length - 1; index >= 0; index--) {
    result[index] = multiplier * result[index];
    multiplier *= intArray[index];
  }

  return result;
}

console.log(getProductsOfAllIntsExceptAtIndex([3, 5, 7, 9]))
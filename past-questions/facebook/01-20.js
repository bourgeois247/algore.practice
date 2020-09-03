'use strict';
/**
 * ----------
 * Challenge
 * ----------
 * 
 * Given two already sorted arrays where the first array has as many null values(_)
 * at the end of the array as there are elements in the second array:
 * 
 * A = [1, 2, 3, 4, _, _, _]
 * B = [4, 5, 6]
 * 
 * Produce an output array with both arrays merged into one, and properly sorted,
 * in constant space.
 * 
 * E.g const output = [1, 2, 3, 4, 4, 5, 6];
 */

/**
 * My Attempt
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * @param {array} largerArray
 * @param {array} smallerArray
 */
function mergeSortedSpacedArrays(largerArray, smallerArray) {
  // maintain two pointers for both arrays
  let largerArrayPointer = 0;
  let smallerArrayPointer = 0;

  // we loop over the larger array, since it contains the total number of elements, the result would contain
  while (largerArrayPointer < largerArray.length) {
    if (
      largerArray[largerArrayPointer] === null ||
      largerArray[largerArrayPointer] >= smallerArray[smallerArrayPointer]
    ) {
      // if it's the last element
      if (largerArray[largerArrayPointer + 1] === undefined) {
        // replace the last element with the value from the smaller array
        largerArray.splice(largerArrayPointer, 1, smallerArray[smallerArrayPointer]);
      } else {
        // if the value in the smaller array is smaller, pop, splice, continue
        largerArray.pop();
        largerArray.splice(largerArrayPointer, 0, smallerArray[smallerArrayPointer]);
      }

      smallerArrayPointer++;
    }

    largerArrayPointer++;
  }

  return largerArray;
}

// console.log(mergeSortedSpacedArrays([1, 2, 3, 4, null, null, null], [4, 5, 6]));
// console.log(mergeSortedSpacedArrays([1, 10, 20, 30, null, null, null], [5, 15, 25]));
// console.log(mergeSortedSpacedArrays([1, 2, 3, null, null, null], [2, 5, 6]));

/**
 * LeetCode Version
 *
 * @param {array} nums1 
 * @param {number} m 
 * @param {array} nums2 
 * @param {number} n 
 */
var merge = function (nums1, m, nums2, n) {
  // maintain two pointers for both arrays
  let largerArrayPointer = 0;
  let smallerArrayPointer = 0;
  const totalElements = m + n;

  // we loop over the larger array since it has space for all combined elements
  while (largerArrayPointer < totalElements) {
    if (
      largerArrayPointer >= m ||
      nums1[largerArrayPointer] >= nums2[smallerArrayPointer]
    ) {
      // if it's the last element
      if (nums1[largerArrayPointer + 1] === undefined) {
        // replace the last element with the value from the smaller array
        nums1.splice(largerArrayPointer, 1, nums2[smallerArrayPointer]);
      } else {
        // if the value in the smaller array is smaller, pop, splice, continue
        nums1.pop();
        nums1.splice(largerArrayPointer, 0, nums2[smallerArrayPointer]);
        m++;
      }

      smallerArrayPointer++;
    }

    largerArrayPointer++;
  }

  return nums1;
}

/**
 * LeetCode - elegant solution by jason1243
 *
 * @param {array} nums1 
 * @param {number} m 
 * @param {array} nums2 
 * @param {number} n 
 */
function mergeReverse(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }

    if (first >= 0 && nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      nums1[i] = nums2[second];
      second--;
    }
  }

  return nums1;
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeReverse([2, 0, 0], 1, [-2, -1], 2));
'use strict'
/**
 * Interview Cake Practice 1.4
 * Challenge Title: Merge sorted arrays
 * Challenge URL: https://www.interviewcake.com/question/javascript/
 * merge-sorted-arrays?course=fc1&section=array-and-string-manipulation
 * 
 * Time Complexity: O(n + m) = O(n)
 * Space Complexity: O(n + m)
 * 
 * @param {array} myArray 
 * @param {array} alicesArray 
 */
function mergeArrays(myArray, alicesArray) {

  // get the length of the larger array
  let myArrPointer = 0, aliceArrPointer = 0;
  let result = [];

  while (myArray[myArrPointer] || alicesArray[aliceArrPointer]) {
    // if one of the two arrays runs out of orders, append the items of the other array
    if (!myArray[myArrPointer]) {
      result.push(alicesArray[aliceArrPointer]);
      aliceArrPointer++;
      continue;
    }

    if (!alicesArray[aliceArrPointer]) {
      result.push(myArray[myArrPointer]);
      myArrPointer++;
      continue;
    }

    // figure out the smaller/bigger one and place them sequentially
    if (myArray[myArrPointer] > alicesArray[aliceArrPointer]) {
      result.push(alicesArray[aliceArrPointer]);

      // check if the smaller number's array has other number smaller
      // than the bigger number
      let snooperPointer = aliceArrPointer + 1;
      while (alicesArray[snooperPointer] && (alicesArray[snooperPointer] <= myArray[myArrPointer])) {
        result.push(alicesArray[snooperPointer]);
        alicesArrPointer = snooperPointer;
        snooperPointer++;
      }

      result.push(myArray[myArrPointer]);
    } else {
      result.push(myArray[myArrPointer]);

      let snooperPointer = myArrPointer + 1;
      while (myArray[snooperPointer] && (myArray[snooperPointer] <= alicesArray[aliceArrPointer])) {
        result.push(myArray[snooperPointer]);
        myArrPointer = snooperPointer;
        snooperPointer++;
      }

      result.push(alicesArray[aliceArrPointer]);
    }

    myArrPointer++;
    aliceArrPointer++;
  }

  return result;
}

console.log(mergeArrays(
  [2, 4, 6, 8], [1, 7]
));
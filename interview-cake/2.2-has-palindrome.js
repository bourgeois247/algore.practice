'use strict';
/**
 * Interview Cake Practice 2.2
 * 
 * Challenge Title: Has Palindrome
 * Challenge URL: https://www.interviewcake.com/question/javascript/
 * permutation-palindrome?course=fc1&section=hashing-and-hash-tables
 * 
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * 
 * @param {array} movieLengths 
 * @param {array} flightLength 
 */
function hasPalindromePermutation(theString) {
  let hasPalindrome = false;
  const hasEvenCharacters = theString.length % 2 === 0;
  const cache = {};
  let count = 0;

  while (count < theString.length) {
    cache[theString[count]] = !cache[theString[count]] ? 1 : ++cache[theString[count]];
    count++;
  }

  const cachedCounts = Object.values(cache);

  // for homogenous characters eg 'aaa'
  if (cachedCounts.length === 1) {
    return true;
  }

  if (hasEvenCharacters) {
    hasPalindrome = cachedCounts.every(cachedCount => cachedCount === 2);
  }

  if (!hasEvenCharacters) {
    // there should only be one instance of 1
    let oneCount = 0;
    let hasMoreThanTwo = false;

    for (let cachedCount of cachedCounts) {
      if (cachedCount === 1) {
        oneCount++;
        continue;
      }

      // anything that's not two, disqualifies the string
      if (cachedCount !== 2) {
        hasMoreThanTwo = true;
        break;
      }
    }

    if (oneCount === 1 && !hasMoreThanTwo) {
      hasPalindrome = true;
    }
  }

  return hasPalindrome;
}


console.log(hasPalindromePermutation('aabcbcd'));
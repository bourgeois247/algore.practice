'use strict';
/**
 * Number Pyramid of n terms
 * 
 * Creates a pyramid of numbers of size n. Say n is 3, output should be
 *     1
 *   2 1 2
 * 3 2 1 2 3
 */
function numPyramid(n) {
  // loop for the height
  let result = '';
  let row;

  for (let height = 1; height <= n; height++) {
    row = '';

    for (let left = height; left >= 1; left--) {
      row += `${left} `;
    }

    for (let right = 2; right <= height; right++) {
      row += `${right} `;
    }

    row.trim();
    row = row.padStart((((n - height + 1) * 2) - 2) + row.length);
    result += `${row}\n`;
  }

  return result;
}

console.log(numPyramid(5))
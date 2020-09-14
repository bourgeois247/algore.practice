'use strict'
/**
 * Interview Cake Practice 3.1
 * Challenge Title: Apple Stock
 * Challenge URL: https://www.interviewcake.com/question/javascript/
 * stock-price?course=fc1&section=greedy
 * 
 * Time Complexity: O(2n) => O(n)
 * Space Complexity: O(n)
 * 
 * @param {array} meetings 
 */
function getMaxProfit(stockPrices) {
  // let profitMarginPool = [];

  // keep track of which numbers are the smallest and highest
  let bestProfit
  let largest = stockPrices[0];
  let largestIndex = 0;
  let smallest = stockPrices[0];
  let smallestIndex = 0;

  // traverse the array
  if (stockPrices.length > 1) {
    for (let stockPriceIndex = 1; stockPriceIndex < stockPrices.length; stockPriceIndex++) {
      const stockPrice = stockPrices[stockPriceIndex];

      if (stockPrice > largest) {
        largest = stockPrice;
        largestIndex = stockPriceIndex;
      }

      if (stockPrice < smallest) {
        smallest = stockPrice;
        smallestIndex = stockPriceIndex;
      }

      profitMarginPool = largestIndex > smallestIndex
        ? [...profitMarginPool, (largest - smallest)]
        : [...profitMarginPool, (smallest - largest)];
    }

    const difference = largestIndex > smallestIndex
      ? (largest - smallest)
      : (smallest - largest);

    bestProfit = bestProfit >= difference ? bestProfit : difference;

    // TODO: In article, start with this O(n) space solution, then move to the O(1) enhancement
    // get the highest amount
    // return profitMarginPool
    //   .reduce((accum, profitMargin) => (accum > profitMargin ? accum : profitMargin), profitMarginPool[0]);
  } else {
    throw new Error('Invalid Stock Price List');
  }
}

console.log(getMaxProfit([9, 7, 4, 1]));
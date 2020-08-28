'use strict';
/**
 * Interview Cake Practice 1.5
 * Challenge Title: Cafe Order Checker
 * Challenge URL: https://www.interviewcake.com/question/javascript/
 * cafe-order-checker?course=fc1&section=array-and-string-manipulation
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * @param {array} takeOutOrders 
 * @param {array} dineInOrders 
 * @param {array} servedOrders 
 */
function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  /**
   * if total served orders does not match up to the sum
   * of both dine ins and take outs, the extra order(s)
   * means we didn't properly account for all orders, and hence
   * the process is not first come first serve.
   */
  if (takeOutOrders.length + dineInOrders.length !== servedOrders.length) {
    return false;
  }

  // loop through the total served array
  let takeOutIndexLastChecked = 0;
  let dineInIndexLastChecked = 0;
  let servedIndex = 0;
  let isFirstComeFirstServed = true;

  while (servedIndex < servedOrders.length) {
    // confirm that each elem's index is not less than the index of either
    // the take outs or served orders

    const takeOutIndex = takeOutOrders.indexOf(servedOrders[servedIndex]);
    const dineInIndex = dineInOrders.indexOf(servedOrders[servedIndex]);

    /**
     * If the served order is not registered as a take out or dine in,
     * it's not first come first serve, because we can't 
     * account for the stray order
     */
    if (takeOutIndex === -1 && dineInIndex === -1) {
      isFirstComeFirstServed = false;
    }

    // if the order is from take outs
    if (takeOutIndex >= 0) {
      isFirstComeFirstServed = !(takeOutIndex < takeOutIndexLastChecked);
      takeOutIndexLastChecked = takeOutIndex;
    } else if (dineInIndex >= 0) {
      // the order is from dineIns
      isFirstComeFirstServed = !(dineInIndex < dineInIndexLastChecked);
      dineInIndexLastChecked = dineInIndex;
    }

    // no need to continue this chaos
    if (!isFirstComeFirstServed) {
      break;
    }

    servedIndex++;
  }


  return isFirstComeFirstServed;
}

console.log(isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]));
'use strict';
/**
 * Interview Cake Practice 2.1
 * 
 * Challenge Title: Inflight Entertainment
 * Challenge URL: https://www.interviewcake.com/question/javascript/
 * inflight-entertainment?course=fc1&section=hashing-and-hash-tables
 * 
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 *
 * TODO: Do an obvious O(n^2) and then a 2O(n)
 * Space comp can be improved here by declaring the variables outside the loop
 * 
 * @param {array} movieLengths 
 * @param {array} flightLength 
 */
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  let areThereTwoMovies = false;

  // run through the length of the movies array
  movieLengths.forEach((item, index) => {
    const otherPotentialMovieLength = flightLength - item;
    const indexOfOtherPotentialMovieLength = movieLengths.indexOf(otherPotentialMovieLength);

    // check the movieLengths if there's a 
    // corresponding value that's not the same index(in x2 cases)
    // if yes, those two movies can work
    // if not, there isn't
    if (
      indexOfOtherPotentialMovieLength !== -1 &&
      indexOfOtherPotentialMovieLength !== index) {

      areThereTwoMovies = true;
    }
  });

  return areThereTwoMovies;
}

/**
 * Talk about the "break" limitation with forEach
 * Move to for of - distinguish between that and for in(use to remember, inside objects)
 * Finally optimization with readability Array.prototype.some
 * 
 * @param {*} movieLengths 
 * @param {*} flightLength 
 */
function canTwoMoviesFillFlightNTime(movieLengths, flightLength) {
  let areThereTwoMovies = false;
  let movieLengthSet = new Set(movieLengths);
  let cache = {};
  let onlyIfDuplicateExists = false;

  // loop through movieLengths to get corresponding movieLengths that add up to the flightLength
  movieLengths.forEach(movieLength => {
    cache[movieLength] = cache[movieLength] === undefined ? 1 : ++cache[movieLength];

    // if flight time is double any of the movieLengths, we can only allow
    // a truthy return iff there are two separate movies with the same length
    if (flightLength / movieLength === 2) {
      onlyIfDuplicateExists = true;
    }

    if (movieLengthSet.has(flightLength - movieLength)) {
      areThereTwoMovies = true;
    }
  });

  // confirm we don't have a false +ve: when the flight time is double
  // any of the movie lengths
  const hasARepeatedItem = (Object.keys(cache)).some(key => cache[key] > 1);

  return onlyIfDuplicateExists
    ? areThereTwoMovies && hasARepeatedItem
    : areThereTwoMovies;
}

// console.log(canTwoMoviesFillFlightNTime([2, 4], 6));
// console.log(canTwoMoviesFillFlightNTime([2, 2], 4));
console.log(canTwoMoviesFillFlightNTime([2, 3], 4));
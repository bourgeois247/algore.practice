function reverse(arrayOfChars) {

  // find the midpoint of the array, round up
  const midpoint = Math.floor(arrayOfChars.length / 2);

  console.log('Midpoint: ', midpoint);

  // maintain two counters
  // one to start from the begining towards the midpoint
  // the other to start from the end towards the midpoint
  let forwardChar, backwardChar;
  let forwardPointer = 0;
  let backwardPointer = arrayOfChars.length - 1;


  // loop through the array up until this mid point
  while (backwardPointer >= midpoint) {
    // retrieve characters and the current indices
    forwardChar = arrayOfChars[forwardPointer];
    backwardChar = arrayOfChars[backwardPointer];

    console.log('Characters: ', arrayOfChars);

    // swop them
    arrayOfChars[forwardPointer] = backwardChar;
    arrayOfChars[backwardPointer] = forwardChar;

    console.log('Reversed Characters: ', arrayOfChars);

    // move forward
    forwardPointer++;
    backwardPointer--;
  }

  // Edge/curious case, odd number of elements

  return arrayOfChars;
}

console.log(reverse(['a', 'b', 'c']))
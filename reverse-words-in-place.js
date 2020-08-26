function reverseWords(message) {

  // initialize one counter to start at the end of the array
  let counter = message.length - 1;
  let currentChar;
  let spaceCount = 0;
  let insertionIndex = 0;
  let wordLength = 0;

  // for each iteration, move the element at the end of the array to the beginning
  while (counter >= 0) {
    // pop off the last character in the array
    currentChar = message.pop();

    spaceCount = currentChar === ' ' ? spaceCount + 1 : spaceCount;

    if (spaceCount > 0) {
      // change insertion index to the space right after the last word
      insertionIndex = insertionIndex + wordLength;
      message.splice(insertionIndex, 0, currentChar);

      // reset space and word counts
      spaceCount = 0;
      wordLength = 0;

      // insertions should now happen after the space
      insertionIndex = insertionIndex + 1;
      counter--;
      continue;
    }

    message.splice(insertionIndex, 0, currentChar);
    wordLength++;

    counter--;
  }

  return message;
}

console.log(reverseWords(['c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l']))

// input => ['o','n',' ','t','o']
// output => ['t','o',' ','o','n']


// ---
// count = 4
// currentChar = 'o', message = ['o','n', ' ','t',]
// spaceCount = 0
// insertionIndex = 0
// message = ['o','o','n', ' ','t',]
// wordLen = 1
// ---

// ---
// count = 3
// currentChar = 't', message = ['o','o','n', ' ',]
// spaceCount = 0
// insertionIndex = 0
// message = ['t','o','o','n', ' ',]
// wordLen = 2
// ---

// ---
// count = 2
// currentChar = ' ', message = ['t','o','o','n',]
// spaceCount = 0
// insertionIndex = (insertion index + word len) = 2
// message = ['t','o',' ','o','n',]
// wordLen = 0
// insertionIndex = insertionIndex + 1 = 3
// ---

// ---
// count = 1
// currentChar = 'n', message = ['t','o',' ','o',]
// spaceCount = 0
// insertionIndex = 3
// message = ['t','o',' ','n','o',]
// wordLen = 1
// ---

// ---
// count = 0
// currentChar = 'o', message =  ['t','o',' ','n',]
// spaceCount = 0
// insertionIndex = 3
// message = ['t','o',' ','o','n',]
// wordLen = 2
// ---

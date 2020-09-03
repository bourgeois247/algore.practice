'use strict';
/**
 * Interview Cake Practice 2.3
 * 
 * Challenge Title: Word Cloud
 * Challenge URL: https://www.interviewcake.com/question/javascript/
 * permutation-palindrome?course=fc1&section=hashing-and-hash-tables
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) <--- Lies!
 * 
 * @param {array} movieLengths 
 * @param {array} flightLength 
 */
class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  capitalize(word) {
    return [word[0].toUpperCase(), ...word.slice(1)].join('');
  }

  populateWordsToCounts(inputString) {
    let wordCounter = 0;

    const helperMap = {};
    let inputStringOriginalArray = inputString
      .replace(/(\B-\B|[^\w\s-\'])/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim()
      .split(' ');

    while (wordCounter < inputStringOriginalArray.length) {
      // if this is the first time we're encountering this character, up the count by 1
      const wordToUpdate = inputStringOriginalArray[wordCounter];
      const wordToUpdateLowerCase = inputStringOriginalArray[wordCounter].toLowerCase();

      if (!helperMap[wordToUpdateLowerCase]) {
        helperMap[wordToUpdateLowerCase] = 1;

        // also update the actual map
        this.wordsToCounts.set(wordToUpdate, 1);
      } else {
        // this means we've dealt with this value before
        helperMap[wordToUpdateLowerCase]++;

        // first confirm a different version of the word doesn't already exist
        // if the word as is doesn't exist in the Map
        if (!this.wordsToCounts.has(wordToUpdate)) {
          // does the capitalized version exit?
          const capitalizedWord = this.capitalize(wordToUpdate);
          const capVersionCount = this.wordsToCounts.get(capitalizedWord);

          if (capVersionCount) {
            // if it dows, stick with the more recent version
            this.wordsToCounts.delete(capitalizedWord);
            this.wordsToCounts.set(wordToUpdate, helperMap[wordToUpdateLowerCase]);
          }

        } else {
          this.wordsToCounts.set(wordToUpdate, helperMap[wordToUpdateLowerCase]);
        }
      }

      wordCounter++;
    }
  }
}

console.log(new WordCloudData('Chocolate cake b-a for dinner and pound cake for dessert').wordsToCounts);
console.log(new WordCloudData('Strawberry short cake? Yum!').wordsToCounts);
console.log(new WordCloudData('Dessert - mille-feuille cake').wordsToCounts);
console.log(new WordCloudData('Mmm...mmm...decisions...decisions').wordsToCounts);
console.log(new WordCloudData('Allie\'s Bakery: Sasha\'s Cakes').wordsToCounts);
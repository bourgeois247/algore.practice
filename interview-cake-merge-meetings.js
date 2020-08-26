function mergeRanges(meetings) {
  /**
   * Sort entire array first
   * For each meeting, check if immediate right hand neighbour overlaps
   * if yes, create a new range, 
   * plucking the startTime of that item and the endTime of the neighbor
   */

  // sort array
  meetings.sort((meeting1, meeting2) => {
    if (meeting1.startTime < meeting2.startTime) {
      return -1;
    }

    if (meeting1.startTime > meeting2.startTime) {
      return 1;
    }

    return 0;
  });

  let newRanges = [];
  let pointer = 0;
  let lookAheadPointer = 1;
  let currentEndtime = meetings[pointer].endTime;

  while (pointer < meetings.length) {
    // do neighboring meetings overlap?
    if (meetings[lookAheadPointer] && currentEndtime >= meetings[lookAheadPointer].startTime) {
      currentEndtime = currentEndtime < meetings[lookAheadPointer].endTime
        ? meetings[lookAheadPointer].endTime
        : currentEndtime;

      lookAheadPointer++;
      continue;
    }

    newRanges = [
      ...newRanges,
      {
        startTime: meetings[pointer].startTime,
        endTime: currentEndtime
      }
    ];

    pointer = lookAheadPointer;
    lookAheadPointer = pointer + 1;

    currentEndtime = meetings[pointer] ? meetings[pointer].endTime : meetings[meetings.length - 1];
  }

  return newRanges;
}

const data = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]

console.log(mergeRanges(data));
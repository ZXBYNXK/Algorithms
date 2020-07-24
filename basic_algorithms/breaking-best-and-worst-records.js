// Hackerrank: Breaking Best and Worst Records
// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  /* 1
        Assign the following two variables initial values of zero.
        
        highestRecordIncreased: 
            Represents number of times the current highest record has increased value during iteration of the scores array.
    
        lowestRecordDecreased: 
            Represents number of times the current lowest record has decreased value during iteration of the scores array.
    */
  let [highestRecordIncreased, lowestRecordDecreased] = [0, 0];

  /* 2
       Assign the following two variables initial values of scores[0].
       
       currentHighestRecord: 
           Represents the highest record has throughout iteration of the scores array.
   
       currentLowestRecord: 
           Represents the lowest record throughout iteration of the scores array.
   */
  let [currentHighestRecord, currentLowestRecord] = [
    scores[0] * 1,
    scores[0] * 1,
  ];

  // Begin iteration of the scores array
  scores.forEach((score) => {
    // If the passed score is greater than the current highest record.
    if (currentHighestRecord < score) {
      // Assign a new current highest record of score.
      currentHighestRecord = score;
      // Scince highest record has increased, increment by 1.
      ++highestRecordIncreased;
    }

    // If the passed score is less than lowest current record.
    if (score < currentLowestRecord) {
      // Assign a new current highest record of score.
      currentLowestRecord = score;
      // Scince lowest record has decreased, increment by 1.
      ++lowestRecordDecreased;
    }
  });

  // Return the required array value.
  return [highestRecordIncreased, lowestRecordDecreased];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]).join(" ") + "\n");

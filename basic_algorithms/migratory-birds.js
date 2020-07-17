// Algorithms
// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(array) {
  // birdHouse is {"BIRD-TYPE": "QTY-OF-BIRDS"} ex: {"Bird type 2": "4 of them"} really: {"2":"4", ... "6":"2"}
  // Create empty birdhouse or object
  let birdHouse = {};

  // Set the lowest common number by default to the first value of the array.
  let lowestCommonNumber = array[0] || false;

  // If the array is not empty
  if (lowestCommonNumber) {
    for (let i = 0; i < array.length; i++) {
      // if birdType does not exist, then create a birdType and assign it its first bird.
      if (!birdHouse[array[i]]) {
        // Assign the birdhouse its new bird type.
        birdHouse[array[i]] = 0;
      }

      // Birhouse just housed another bird of the current type aka array[i].
      birdHouse[array[i]] += 1;

      // DEBUG: Birdhouse during current iteration
      //   console.log(i, birdHouse)

      // If the current bird type or number has a higher qty of birds then it is now the LCN
      // or if  the qtys are equal and the bird type or number is lower than the current LCN then
      // the bird type is again reassigned its predecessor.
      if (
        birdHouse[lowestCommonNumber] < birdHouse[array[i]] ||
        (birdHouse[lowestCommonNumber] === birdHouse[array[i]] &&
          array[i] < lowestCommonNumber)
      ) {
        // Assign the new LCN.
        lowestCommonNumber = array[i];
      }
    }
  }
  // Return the number left after the loop.
  return lowestCommonNumber;
}
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));

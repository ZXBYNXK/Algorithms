// Plus Minus Algorithm
// https://www.hackerrank.com/challenges/plus-minus/problem

// Complete the plusMinus function below.
function plusMinus(arr) {
  let [positives, negatives, zeros, lengthOf] = [0, 0, 0, arr.length];
  // const calcRatios = (array) => array.filter(element => element /= lengthOf)
  arr.forEach((element) => {
    if (element === 0) ++zeros;
    if (element > 0) ++positives;
    if (element < 0) ++negatives;
  });
  // calcRatios([negatives, positives, zeros]);
  negatives /= lengthOf;
  positives /= lengthOf;
  zeros /= lengthOf;
  positives = positives.toFixed(6);
  negatives = negatives.toFixed(6);
  zeros = zeros.toFixed(6);
  console.log(`${positives}\n${negatives}\n${zeros}`);
}

// DEBUG
console.log("Plus Minus:", plusMinus([-4, 3, -9, 0, 4, 1]));

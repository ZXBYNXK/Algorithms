// Diagonal Difference Algorithm
// https://www.hackerrank.com/challenges/diagonal-difference/problem

"use strict";

function diagonalDifference(arr) {
  const lengthOf = arr.length;
  let primary = 0;
  let secondary = 0;
  for (let i = 0; i < lengthOf; i++) {
    // DEBUG
    // console.log("Primary +=", arr[i][arr.length - 1 - i]);
    // console.log("Secondary +=", arr[i][i]);
    primary += arr[i][i];
    secondary += arr[i][arr.length - 1 - i];
  }
  // DEBUG
  // console.log("difference:", Math.abs(secondary - primary));
  return Math.abs(secondary - primary);
}

// DEBUG
console.log(
  "Results:",
  diagonalDifference([
    [-12, 12, 24],
    [18, 8, 19],
    [23, 24, 0],
  ])
);

// Mini Max Algorithm
// https://www.hackerrank.com/challenges/mini-max-sum/problem
"use strict";

function miniMaxSum(arr) {
  let [min, max] = [0, 0];
  const mergeSort = (arr) => {
    if (arr.length === 1) return arr;

    const middle = Math.floor(arr.length / 2);

    const left = arr.slice(0, middle);

    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  };

  const merge = (left, right) => {
    let mergedArray = [],
      leftI = 0,
      rightI = 0;

    while (leftI < left.length && rightI < right.length) {
      if (left[leftI] < right[rightI]) {
        mergedArray.push(left[leftI]);
        leftI++;
      } else {
        mergedArray.push(right[rightI]);
        rightI++;
      }
    }

    return mergedArray.concat(left.slice(leftI)).concat(right.slice(rightI));
  };

  arr = mergeSort(arr);
  arr.forEach((number, index) => {
    if (index >= 0 && index <= arr.length - 2) min += number;
    if (index > 0 && index <= arr.length - 1) max += number;
  });

  console.log(min, max);
}

miniMaxSum([1, 2, 3, 4, 5]);

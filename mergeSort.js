// Merge Sort
// O(n log n)
// https://www.geeksforgeeks.org/merge-sort/
// Like Quick sort, merge sort is a divide and conquer algorithm.

// Find the middle of the array
// sort from

// Process of merge sort
// What you need to do:
//      Create two functions 'merge(left, right)' & 'mergeSort(array)'

// Creating the function 'mergeSort(array)'
// Responsiblities:
//      Splitting the array argument in half and call it self again with the two sorted halves.
//      Note: The halves will be sorted with the 'merge(left, right)' helper function
// Steps:
//      1: If the array only has one element then return the array since there is nothing to sort.
//      2: Get the middle index number of the array.
//      3: Slice the elements from the left of the array to the middle ( left -> middle )
//      4: Slice the elements from the right of the array from the middle ( middle -> right )
//      5: return the merge function with both left and right array slices as arguments ( merge(leftSliced, rightSliced) )

// Creating the function 'merge(left, right)'
// Responsibilites:
//      Iterate while sorting both arrays then return both arrays concatenated together.
// Steps:
//      1: Initialize a loop to iterate both arrays with two seperate counters.
//      2: If the left

const mockData = [
  10,
  12,
  8,
  16,
  70,
  80,
  15,
  45,
  80,
  63,
  1002,
  8,
  11,
  12,
  9,
  5,
  8,
  29,
  41,
  52,
  57,
  45,
  0,
  6,
  1003,
  9,
  17,
  31,
];

// Splitting the array passed in half and recusively calling it self again t
const mergeSort = (arr) => {
  // 1: If the array only has one element then return the array since there is nothing to sort.
  if (arr.length === 1) return arr;

  // 2: Get the middle index number of the array.
  const middle = Math.floor(arr.length / 2);

  // 3: Slice the elements from the left of the array to the middle ( left -> middle )
  const left = arr.slice(0, middle);

  // 4: Slice the elements from the right of the array from the middle ( middle -> right )
  const right = arr.slice(middle);

  // 5: return the merge function with both left and right array slices as arguments ( merge(leftSliced, rightSliced) )
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let mergedArray = [], leftI = 0, rightI = 0;
  while (
    leftI < left.length && rightI < right.length
  ) {
    if (left[leftI] < right[rightI]) {
        mergedArray.push(left[leftI]);
        leftI++;
    } else {
        mergedArray.push(right[rightI]);
        rightI++
    } 
  }
  return mergedArray.concat(left.slice(leftI)).concat(right.slice(rightI))
};
console.log(mergeSort(mockData));

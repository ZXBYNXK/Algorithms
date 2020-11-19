//Darius Rain
//Algorithms: Slice and Splice
//Date: 11-19-19
/*
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/
function frankenSplice(arr1, arr2, n) {

  let newArr1 = arr1.map(item => {return item}),
 newArr2 = arr2.map(item => {return item});


    newArr2.splice(n, 0, ...newArr1)



 
 
 
 return newArr2
}

frankenSplice([1, 2, 3], [4, 5], 1);

//Darius Rain
//Algorithm: Chunky Monkey
//Date: 12/10/19


/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  
let temp = [];

for(let i = 0; i < size; i++){
    temp.push([])
}

for(let i=0, j=0, k=0; i < arr.length; i++){
       
    if(j < size){
       temp[k][j].push(arr[i])
    ++j
    }else {
    console.log('reset')
        j = 0
        i -= 1
        k += 1
    }


}
console.log(temp) 
  
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)





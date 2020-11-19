//Name: Darius Rain
//Algorithm: Sorted Union
//Date: 12/20/19

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/


function uniteUnique(arr) {
    
    let caught_numbers = [],
    length_of_args = arguments.length,
    intake = [],
    result = [];

    for(let i=0; i < length_of_args; i++){
        intake = intake.concat(arguments[i])
    }

    for(let i=0; i < intake.length; i++){
        if(!caught_numbers.includes(intake[i])){
           result.push(intake[i])
           caught_numbers.push(intake[i])
        }
    }
    // arr.forEach(element => {
    //     console.log(element)
    //     if(caught_numbers.includes(element) === -1){
    //     caught_numbers.push(element)
    //     }
    // })
    console.log(result)

  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
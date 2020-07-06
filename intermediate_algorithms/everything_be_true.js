//Darius Rain
//Algorithm: Everything Be True

/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
*/

function truthCheck(collection, pre) {
    // Is everyone being true?
  
  for(let i = 0; i < collection.length; i++){


    //In this if else statement it will automatically check boolean values in the if() or else if() operatror. So anything converted to falsey value inside those parenthesis will evaluate
    // to a true or false value thus determining in this case a 50/50 outcome to either return false or proceed if true. 
  if(collection[i][`${pre}`]){
    //Dont need code here
  }else {

    //This ends the program and returns false
    return false
  }
  
  
  }

  //If all ran well then return true
  return true
  
  }

  
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

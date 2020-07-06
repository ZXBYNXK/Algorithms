//Darius Rain
//Algorithm: Arguments optional

/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
*/



function addTogether(a,b) {
   
 if(typeof(a || b) === 'array' || typeof(b) === 'string'){
     return undefined
 }else if(typeof(a) === 'number' && typeof(b) === 'number') {
   return a + b
    }
    else if(typeof(a || b) === 'function'){
    return (next => {
        if(typeof(next) === 'number'){
        return a + next 
        }
        else {
            return undefined
        }
    })
}


return (next => {
    if(typeof(next) === 'number'){
    return a + next 
    }
    else {
        return undefined
    }
})



  }
  
  console.log(addTogether(2, "3"));
  //console.log(addTogether("http://bit.ly/IqT6zt"))
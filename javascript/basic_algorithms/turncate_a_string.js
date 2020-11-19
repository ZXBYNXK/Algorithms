//Darius Rain
//Algorithms: Truncate a string.
//Date: 11-18-19


var truncateString = function(str, numOrStr){
//console.log(str)
//console.log(numOrStr)
let dotDot = "...",
final = "",
numIfString = 0,
noDotDot = false;

//console.log(typeof numOrStr)
if(typeof numOrStr === "string"){
  numIfString = numOrStr.length;
  for(let i=0; i < numIfString; i++){
   
    if(i == numIfString && str[numIfString] === " " || str[numIfString] === "  " || str[i] === undefined){
    
     break;
    }
    final += str[i];
    
  } 
  if(str.length <= numIfString){
    noDotDot = true;
    }
  if(noDotDot === false){
  final += dotDot;
  }
  //console.log(numStr.length)
}else {

for(let i=0; i < numOrStr; i++){
 
if(i == numOrStr && str[i] === " " || str[i] === "  " || str[i] === undefined){
break;
}
  final += str[i];
}
if(str.length <= numOrStr){
    noDotDot = true;
    } 
     if(noDotDot === false){
  final += dotDot;
  }

}
return final
}
truncateString("A-", 1)

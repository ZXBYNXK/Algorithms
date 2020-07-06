//Darius Rain
//Algorithms: UpperCase 
//Date: 11-19-19
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/
/*
function titleCase(str) {
str = str.split(' ');
//let strArr = [];
let final = '';

for(let i=0; i < str.length; i++){
let cappedLetter = str[i][0].toUpperCase(),
restOfString = str[i].substring(1, str[i].length);
final += `${cappedLetter}${restOfString} `
//console.log(restOfString)
}
console.log(final)
}
titleCase("I'm a little tea pot");
*/

function titleCase(str) {
str = str.split(' ');
//let strArr = [];
let final = '';

for(let i=0; i < str.length; i++){
let cappedLetter = str[i][0].toUpperCase(),

restOfString = str[i].substring(1, str[i].length).toLowerCase();
if(i < str.length - 1){
final += `${cappedLetter}${restOfString} `
}else{
final += `${cappedLetter}${restOfString}`
  }
}
console.log(final)
}
titleCase("I'm a little tea pot");



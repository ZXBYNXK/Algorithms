//Darius Rain
//Algorithms: Confirm The Ending
//Date: 11-18-19
//Used: functions, if else statements.

//Misson:

function confirmEnding(str, target) {
if(str.slice(str.length - target.length) === target){
return true
}else{return false}
}
confirmEnding("inbow", "asbow");


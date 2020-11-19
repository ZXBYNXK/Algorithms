//Darius Rain
//Algorithms: Repeat a string, repeat a string.
//Date: 11-18-19
//Used: functions, for loops.


function repeatStringNumTimes(str, num) {
let string = '';
for(let i=0; i < num; i++){
	string += str
}  
console.log(string)
}
repeatStringNumTimes("*", 3);

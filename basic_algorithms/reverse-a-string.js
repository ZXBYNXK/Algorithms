//Used: functions, if else statements, readline, reverseString.
var runprogram = function(){  
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout

})


var askReverse = function(){
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log("@@The@@@@@@@@@@@@@@@@@@@@@")
console.log("@@@@@Reverser@@@@@@@@@@@@@")
console.log("@Made By Darius Rain@@@@@@")
\console.log("@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log(`Reverse Your Text:`)

	rl.question(``, function(input){
	
		reverseString(input)
	
	
	
	
	})


}





function reverseString(str) {
  
 var original = [str]
 var reversed = ''

 var downIndex = original[0].length - 1;
 
 function formulaForReverse() {
 
 reversed += `${original[0][downIndex]}`;
 downIndex = downIndex - 1;
 
 } 
  
 //console.log(original)
 
 while(downIndex > -1) {
 
 	formulaForReverse();
 
 
 }
 
 
 //reversed = original[0][downIndex]
 console.log(reversed)
askReverse();
}
}



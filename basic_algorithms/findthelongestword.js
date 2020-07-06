//Darius Rain
//Algorithm: Find the longest word in string.
//Date: 11-17-19
//Used: functions, if else statements, for loops.
function findLongestWordLength(str) {
  str = str.split(' '); //Creates an array each index being replaced by index numbers.
  //console.log(str)
let king = `| String: ${str[0]} | Length: ${str[0].length} |`, 
//This variable holds a string value of the final output. Refering to king of the hill.(Set it to the first index of the array by default becuase it saves complexities in the for loop.)
currentLength = str[0].length; 
// This variable holds the current length of the above 'king' variable. (Set it to the first index of the array by default becuase it saves complexities in the for loop.) 

//(Line: 8 & Line: 10) The variables above change when the loop is executed until it comes with a final solution. 
for(let i=0; i < str.length; i++){
	
	if(str[i].length > currentLength) { 
	//(Line:14) Each time the loop is ran it compares the current length of the 'king' variable and evaluates if the existing value is greater than the new one.
		currentLength = str[i].length;   
		//(Line:15) Sets the new value to the 'currentLength' variable.
		king = `| String: ${str[i]} | Length: ${str[i].length} |`		
		//(Line:16) Sets the new value to the 'king' variable.
	}//For loop runs again.
	

}
console.log(king)
//(line:26) console logs the final output from the 'king' variable.  
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

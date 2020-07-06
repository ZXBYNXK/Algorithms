//Used: functions, if else statements, for loops.
function largestOfFour(arr) {
  
  //console.log(arr);
var largest = 0;
var newArray = [];


for(let i = 0; i < arr.length; i++){
	
	for(let j = 0; j < arr.length; j++){
	
	if(arr[i][j] > largest) {
	
	largest = arr[i][j];
	
	
	} 
	
	
	}
	newArray.push(largest)
	
}
console.log(newArray)
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


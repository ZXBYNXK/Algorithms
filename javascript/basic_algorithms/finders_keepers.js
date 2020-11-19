//Darius Rain
//Algorithms: Finders Keepers
//Date: 11-19-19
//Used: functions, if else statements.
/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

/* My first theory
function findElement(arr) {
for(let i=0; i < arr.length; i++) {
	if(arr[i] % 2 === 0){
	console.log(`Even Numbers: ${arr[i]}`)
		}
	}
}
findElement([1, 2, 3, 4]);
*/

function findElement(arr, func) {
 let num = 0;
 
 for(let i=0; i < arr.length; i++){
 		num = arr[i]
 		if(func(num)){
 			console.log(num)
 		return num
 	
 }
 
 }
  return undefined
  

}

findElement([1, 5, 8, 9], function(num) { num % 2 === 0});



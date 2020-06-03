
// Darius Rain (Created in VIM)

// Import readline from built-in node modules
const readline = require('readline');

// Create an interface with readline's createInterface() method. 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
	});

// All input should be numbers so decided to try out with regex and then use String.match(regex) 
const regex = /[0-9]/gm

// Asks for year then evaluates the input if not passed then reask again 
const askForYear = () => rl.question("Year:", evaluateInput);

// Checks if is leap year or not, if year modulo 4 has no remainder and year modulo 100 has a remainder or if it has no remainder modulo 400
const isLeapYear = (year) => year % 4 === 0 && !year % 100 === 0 || year % 400 === 0 ? exitProgramWith(year, true)  : exitProgramWith(year, false);


// See if input is all numbers
const evaluateInput = (input) => input.split("").every(chars => chars.match(regex)) ? console.log(isLeapYear(input)) : askForYear();


// This will be called when program is done and the isLeapYear returns this.
const exitProgramWith = (year, bool) => {
	console.log(`${year} is ${bool ? "a" : "not a"} leapyear`);
	rl.close();
	return bool;
}

// Ask for year which runs the entire program.
askForYear();

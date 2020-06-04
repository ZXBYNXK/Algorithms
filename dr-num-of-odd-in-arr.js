// Darius Rain

// A problem that inspired me from a recent meeting I was in.  Decided to takle this one ! 😁🐱‍👤

// Dummy array of numbers
const mockData = [
  2,
  15,
  8,
  9,
  20,
  19,
  17,
  12,
  12,
  17,
  18,
  20,
  96,
  76,
  65,
  63,
  17,
  21,
  22,
  19,
  20,
  7
];

// This will have named indexes of odd numbers and the value is how many times that odd number has been found 
// ex: {"3": 2, "5": 3, "7": 1}
let oddNumberObj = {}

// -> I like functional programming so I am going to break this problem down in functions.

// Only responsible for updating the container object that holds all the odd named indexes and add one to the value 
// regardless of what happens
const createOrUpdate = (obj, num) => obj[num + ""] ? obj[num + ""] += 1 : obj[num + ""] = 1;


// Only responsible for checking numbers for odd values if odd then proceed to the next function.
const isOdd = (num) => num % 2 != 0 ? createOrUpdate(oddNumberObj, num) : false;

// This function will use both of the above functions while looping through the array with just using the isOdd.
const findOddNums = (arr) => 
{ 
    arr.filter(num => isOdd(num));
    return oddNumberObj;
}

// Results are shown here
console.log("Mock Data", mockData);
console.log("Result", findOddNums(mockData));


// I Love algorithms and data structures ! 🐱‍🏍



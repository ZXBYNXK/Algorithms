// Simple Array Sum ALgorithm
// https://www.hackerrank.com/challenges/simple-array-sum
'use strict';

function simpleArraySum(ar, result=0) {
    ar.forEach(num => result += num);  
    return result;
}

// DEBUG
console.log("Simple Array Sum:", simpleArraySum([12, 4, 8, 9, 2]))

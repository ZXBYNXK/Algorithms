// Very Big Sum Algorithm
// https://www.hackerrank.com/challenges/a-very-big-sum
'use strict';

function aVeryBigSum(ar) {

    let sum = 0;
    ar.forEach(num => sum += num);
    return sum;
}
// DEBUG
console.log("Very Big Sum:", aVeryBigSum([12000, 163524, 8018223, 90283152, 202382564]))


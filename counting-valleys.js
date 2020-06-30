// Diagonal Difference Algorithm
// https://www.hackerrank.com/challenges/counting-valleys/problem
'use strict';

function countingValleys(s) {
    let values = { location: 0, valley: false, valleys: 0 };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "D") {
            values.location -= 1;
        }
        if (s[i] === "U") {
            values.location += 1;
        }

        // console.log(values.location);
        if (values.location < 0) {
            values.valley = true;
        }

        if (i > 0 && values.valley && values.location === 0) {
            values.valleys += 1;
            values.valley = false;
        }
    }
    return values.valleys;
}

// DEBUG
console.log("Valleys:", countingValleys("DUUDDUDDUDDUDDDUDDUD"))
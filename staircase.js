// Staircase Algorithm
// https://www.hackerrank.com/challenges/staircase/problem
'use strict';
function staircase(n) {
    let count = 0;
    while (count !== n) 
    {
        ++count;
        let [spaces, hashes] = [" ".repeat(n - count), "#".repeat(count)];
        console.log(`${spaces}${hashes}`);
    }
}
// DEBUG
staircase(4)


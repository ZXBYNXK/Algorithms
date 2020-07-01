// Stair case algorithm
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
staircase(4)


// Diagonal Difference Algorithm
// https://www.hackerrank.com/challenges/apple-and-orange
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    // Returns if fallen fruit is in range of hitting house    
    const didHitHouse = (n) => s <= n && n <= t;

    // Set initial count
    let appleCount = 0, orangeCount = 0;

    // Iterate through both arrays at the same time.
    for (let x = 0, y = 0; x < apples.length || y < oranges.length; x++ , y++) {

        // Deconstruct apple and orange integers from both arrays
        // Also set defalut boolean value of false if undefined.
        const [apple = false, orange = false] = [apples[x], oranges[y]];
        
        // If value passed for both apple and orange boolean expressions are true
        // meaning no false value was set
        if (apple) {
            // Add the denoted value of point 'a' representing where the apple tree is
            // Pass it to the func and if returned true add to the appleCount 
            didHitHouse(apple + a) ? ++appleCount : false;
        }
        if (orange) {
            // Add the denoted value of point 'b' representing where the orange tree is
            // Pass it to the func and if returned true add to the orangeCount 
            didHitHouse(orange + b) ? ++orangeCount : false;
        }

    }

    // Log the counted apples and oranges that hit Sam's house.
    return console.log(`${appleCount}\n${orangeCount}`)
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}

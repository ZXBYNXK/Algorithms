'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    const lengthOf = arr.length;
    const getMiddleIndex = (array) => Math.floor((array.length - 1) / 2);

    const middleOfMatrix = getMiddleIndex(arr);
    let primary = 0;
    let secondary = 0;
    for (let i = 0; i < lengthOf; i++) {
        if (i === middleOfMatrix) {
            console.log("Middle of:", arr[i][getMiddleIndex(arr[i])])
            let middleOf = arr[i][getMiddleIndex(arr[i])];
            primary += middleOf;
            secondary += middleOf;
        } else {
            console.log("Primary +=", arr[i][arr.length - 1 - i]);
            console.log("Secondary +=", arr[i][i]);
            primary += arr[i][arr.length - 1 - i];
            secondary += arr[i][i]
        }
    }
    return Math.abs(secondary - primary)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

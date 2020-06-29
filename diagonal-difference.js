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
    // Write your code here
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 === 0 || i === 0) {
    //         console.log("If", arr[i])
    //         console.log(`Sum: \n ${sum} += ${arr[i][0]} \n ${sum} += ${arr[i][2]}`)
    //         sum += arr[i][0]
    //         sum += arr[i][2];
    //     } else {
    //         console.log("else", arr[i])
    //         console.log(`Sum: \n ${sum} += ${arr[i][1]}`)

    //         sum += arr[i][1];
    //     }


    // }
    let primary = arr[0][0] + arr[1][1] + arr[2][2];
    let secondary = arr[0][2] + arr[1][1] + arr[2][0];
    // DEBUG
    // console.log(`${arr[0][0]} + ${arr[1][1]} + ${arr[2][2]} = ${arr[0][0] + arr[1][1] + arr[2][2]}`)
    // console.log(`${arr[0][2]} + ${arr[1][1]} + ${arr[2][0]} = ${arr[2][0] + arr[1][1] + arr[2][0]}`)
    // console.log(`${primary} - ${secondary} = ${primary + secondary}`);
    return Math.abs(primary - secondary);

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

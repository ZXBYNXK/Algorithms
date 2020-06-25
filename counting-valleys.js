'use strict';

const fs = require('fs');

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

// Complete the countingValleys function below.
function countingValleys(n, s) {

    let values = { location: 0, valley: false, valleys: 0 };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "D") {
            values.location -= 1;
        }
        if (s[i] === "U") {
            values.location += 1;
        }

        console.log(values.location);
        if (values.location < 0) {
            values.valley = true;
        }

        if (i > 0 && values.valley && values.location === 0) {
            values.valleys += 1;
            values.valley = false;
        }
    }
    // console.log(values.valleys);
    return values.valleys;
    // valley = downs - ups / n
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}

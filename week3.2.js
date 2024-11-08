'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
    const segment = [];
    let segmentQty = 0;
    for (let i = 0; i < s.length; i++) {
        segment.push(s[i])
        if (segment.length === m) {
            const segmentSum = segment.reduce((accu, element) => {
                return accu + element
            })
            segmentSum === d && segmentQty++;
            segment.shift()
        }
    }
    return segmentQty
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine().trim(), 10);

    // const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    // const d = parseInt(firstMultipleInput[0], 10);

    // const m = parseInt(firstMultipleInput[1], 10);
    // const s = [1, 2, 1, 3, 2]
    // const d = 3;
    // const m = 2;


    const s = [2, 2, 1, 3, 2]
    const d = 4;
    const m = 2;

    // const s = [1, 1, 1, 1, 1, 1]
    // const d = 3;
    // const m = 2;

    const result = birthday(s, d, m);
    console.log(result)

    // ws.write(result + '\n');

    // ws.end();
}
main()
'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }
/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */


function flippingBits(n) {
    // Write your code here
    return ~n >>> 0;

}

function flippingBits(n) {
    // Write your code here
    const toBinary = n.toString(2).padStart(32, 0);
    let flipBinary = '';

    for (let i = 0; i < 32; i++) {
        const bit = toBinary[i];
        flipBinary += (bit === '1') ? '0' : '1';
    }
    const toDecimal = parseInt(flipBinary, 2)
    return toDecimal

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const gradesCount = parseInt(readLine().trim(), 10);

    // let grades = [];

    // for (let i = 0; i < gradesCount; i++) {
    //     const gradesItem = parseInt(readLine().trim(), 10);
    //     grades.push(gradesItem);
    // }

    const result = flippingBits(9);
    console.log(result)

    // ws.write(result.join('\n') + '\n');

    // ws.end();
}
main()

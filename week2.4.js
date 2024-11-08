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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let leftToRightDiagonal = 0;
    let rightToLeftDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        leftToRightDiagonal += arr[i][i]
        rightToLeftDiagonal += arr[i][arr.length - 1 - i]
    }
    return Math.abs(leftToRightDiagonal - rightToLeftDiagonal)
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine().trim(), 10);

    // let arr = Array(n);

    // for (let i = 0; i < n; i++) {
    //     arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    // }

    const result = diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]);
    //const result = diagonalDifference([[1, 2, 3, 4], [4, 5, 6, 8], [7, 8, 9, 10], [7, 8, 9, 10]]);
    console.log(result)

    // ws.write(result + '\n');

    // ws.end();
}
main()
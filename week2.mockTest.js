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
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {

    console.log('original' , matrix)
    const n = matrix.length / 2;
    let maxSum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const original = matrix[i][j];
            const right = matrix[i][matrix.length - 1 - j]
            const bottom = matrix[matrix.length - 1 - i][j]
            const bottomRight = matrix[matrix.length - 1 - i][matrix.length - 1 - j]
            const maxVal = Math.max(original, right, bottom, bottomRight);
            maxSum += maxVal;

            console.log(original, right, bottom, bottomRight)
        }

    }

    return maxSum;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const q = parseInt(readLine().trim(), 10);

    // for (let qItr = 0; qItr < q; qItr++) {
    //     const n = parseInt(readLine().trim(), 10);

    //     let matrix = Array(2 * n);

    //     for (let i = 0; i < 2 * n; i++) {
    //         matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
    //     }
    const matrix8x8 = [
        [745, 123, 985, 456, 813, 947, 329, 541],
        [214, 763, 854, 672, 391, 743, 872, 195],
        [482, 690, 123, 781, 534, 211, 973, 604],
        [987, 462, 812, 310, 901, 453, 671, 832],
        [378, 927, 562, 140, 683, 725, 451, 289],
        [530, 734, 611, 227, 476, 380, 559, 674],
        [801, 490, 274, 656, 993, 745, 281, 139],
        [627, 829, 912, 543, 234, 498, 716, 390]
    ];
    const result = flippingMatrix(matrix8x8);
    console.log(result)

    //ws.write(result + '\n');
    //   }

    // ws.end();
}
main()
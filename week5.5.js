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
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr, brr) {
    // Write your code here

    // const frequency = {};

    // brr.forEach(num => {
    //     frequency[num] = (frequency[num] || 0) + 1
    // });

    // arr.forEach(num => {
    //     if (frequency[num]) {
    //         frequency[num] -= 1;
    //     }
    // });

    // const missing = [];
    // for (const num in frequency) {
    //     if (frequency[num] > 0) {
    //         missing.push(Number(num));
    //     }
    // }

    // return missing.sort((a, b) => a - b);




    // const sortedArr = arr.sort((a, b) => a - b)
    // const sortedBrr = brr.sort((a, b) => a - b)

    // for (const num of sortedArr) {
    //     const idx = sortedBrr.findIndex((ele) => ele === num);
    //     idx != -1 && sortedBrr.splice(idx, 1)
    // }

    // const returnValue = [... new Set(sortedBrr)]


    // return returnValue

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arr = [200, 203, 204, 205, 206, 207, 208, 203, 204, 205, 206]
    const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
    // const arr = [1, 2, 1, 3, 5]

    //const m = parseInt(readLine().trim(), 10);

    //const brr = [1, 1, 2, 3, 4, 4]

    const result = missingNumbers(arr, brr);
    console.log(result)

    // ws.write(result.join(' ') + '\n');

    // ws.end();


}
main()


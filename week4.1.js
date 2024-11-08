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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {

    const aSorted = a.sort((a, b) => a - b);
    let maxLengths = 0;
    let count = 1;

    for (let i = 0; i < aSorted.length; i++) {
        for (let j = i + 1; j < aSorted.length; j++) {
            const diff = Math.abs(aSorted[i] - aSorted[j]);
            if (diff <= 1) {
                count++;
            }
        }
        maxLengths = Math.max(maxLengths, count)
        count = 1;

    }
    return maxLengths

    // Write your code here

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine().trim(), 10);

    // const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    //const a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
    const a = [4, 6, 5, 3, 3, 1]
    const result = pickingNumbers(a);
    console.log(result)

    // ws.write(result + '\n');

    // ws.end();
}
main()
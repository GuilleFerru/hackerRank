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
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    // Write your code here
    const sortedA = A.sort((a,b)=> a - b)
    const sortedB = B.sort((a,b)=> a - b)

    for (let i = 0; i < sortedA.length; i++) {
        for (let j = 0; j < sortedB.length; j++) {
            const sum = sortedA[i] + sortedB[j]
            const flag = sum >= k;
            if (flag) {
                const index = sortedB.indexOf(sortedB[j]);
                sortedB.splice(index, 1)
                break
            }
        }
    }

    return B.length === 0 ? 'YES' : 'NO'

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const q = parseInt(readLine().trim(), 10);

    // for (let qItr = 0; qItr < q; qItr++) {
    //     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    //     const n = parseInt(firstMultipleInput[0], 10);

    //     const k = parseInt(firstMultipleInput[1], 10);

    //     const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

    //     const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));
    // const result = twoArrays(5,[1, 2, 2, 1], [3, 3, 3, 4])
    const result = twoArrays(4, [4, 4, 3, 2, 1, 4, 4, 3, 2, 4], [2, 3, 0, 1, 1, 3, 1, 0, 0, 2]);





    //const result = twoArrays(10, [2, 1, 3], [7, 8, 9]);
    console.log(result)

    //     ws.write(result + '\n');
    // }

    //ws.end();
}
main()
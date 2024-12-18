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
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Implementa la lógica aquí para encontrar los pares divisibles

    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            const testOperation = (ar[i] + ar[j]);
            (testOperation % k === 0) ? count++ : count
        }
        
    }

    return count;
}

function main() {
    // Remueve la creación del archivo de escritura y simplemente imprime el resultado
    // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    // const n = parseInt(firstMultipleInput[0], 10);
    // const k = parseInt(firstMultipleInput[1], 10);

    // const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    //const result = divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]);
    const result = divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
    console.log(result);
}
main()

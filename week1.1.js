'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const n = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    arr.forEach((el) => {
        if (el > 0) {
            positive++
        } else if (el < 0) {
            negative++
        } else {
            zero++
        }
    })
    const printVal = (val) => (val / n).toFixed(6)
    console.log(`${printVal(positive)}\n${printVal(negative)}\n${printVal(zero)}`);

}

function main() {
    // Datos de entrada proporcionados manualmente
    const n = 6;
    const arr = [-4, 3, -9, 0, 4, 1];

    plusMinus(arr);
}

main();
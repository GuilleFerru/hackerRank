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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here

    let max = 0;
    let min = 0;
    let auxMin = scores[0];
    let auxMax = scores[0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < auxMin) {
            min++;
            auxMin = scores[i];
        } else if (scores[i] > auxMax) {
            max++;
            auxMax = scores[i];
        }
    }

    return [max, min];
}




function main() {

    const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];


    console.log(breakingRecords(scores));
    // ws.write(result.join(' ') + '\n');

    // ws.end();

    // [10, 5, 20, 20, 4, 5, 2, 25, 1]
}
main()

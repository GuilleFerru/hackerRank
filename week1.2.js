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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {

    // Write your code here
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const resultMax = sum - min;
    const resultMin = sum - max;
    console.log(resultMin, resultMax);
}

function main() {

    //const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    //const arr = [1, 3, 5, 7, 9];
    const arr = [5,5,5,5,5];
    //const arr = [4, 2, 1, 43, 1];
   // const arr = [10, 10, 10, 10, 10];
    miniMaxSum(arr);
}
main()
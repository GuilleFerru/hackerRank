// 'use strict';

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



// /*
//  * Complete the 'fizzBuzz' function below.
//  *
//  * The function accepts INTEGER n as parameter.
//  */

// function fizzBuzz(n) {
//     // Write your code here
//     for (let i = 1; i <= n; i++) {

//         if ((i % 3 === 0) && (i % 5 === 0)) {
//             console.log('FizzBuzz')
//         } else if (i % 3 === 0) {
//             console.log('Fizz')
//         } else if (i % 5 === 0) {
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }

// }

// function main() {
//    // const n = parseInt(readLine().trim(), 10);

//     fizzBuzz(10);
// }
// main()


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    // Write your code here
    const arrSorted = arr.sort()
    const arrayIndex = (arrSorted.length - 1) / 2;
    console.log(arrayIndex)

    return arrSorted[arrayIndex]


}

function main() {
    findMedian([0, 1, 2, 4, 6, 5, 3])
}

main()
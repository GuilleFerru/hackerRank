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
 * Complete the 'sansaXor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function sansaXor(arr) {
    // Write your code here
    let xorTotalizer = 0

    if (arr.length % 2 != 0) {
        for (let i = 0; i < arr.length; i+=2) {
            xorTotalizer ^= arr[i];
        }
        return xorTotalizer
    }
    else {
        return xorTotalizer
    }
}


// function sansaXor(arr) {
//     let xorTotalizer = 0;
//     const n = arr.length;

//     for (let i = 0; i < n; i++) {
//         const numSubarrays = (i + 1) * (n - i);
//         console.log(numSubarrays)

//         if (numSubarrays % 2 !== 0) {
//             xorTotalizer ^= arr[i];
//         }
//     }

//     return xorTotalizer;
// }


// function sansaXor(arr) {
//     // Write your code here
//     let xorTotalizer = 0

//     // for (let i = 0; i < arr.length; i++) {
//     //     for (let j = i; j < arr.length; j++) {
//     //         const subArr = arr.slice(i, j + 1)
//             arr.forEach(value => {
//                 console.log(value)
//                 xorTotalizer ^= value
//             });

//     //     }
//     // }
//     return xorTotalizer
// }



function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const t = parseInt(readLine().trim(), 10);

    // for (let tItr = 0; tItr < t; tItr++) {
    //     const n = parseInt(readLine().trim(), 10);

    //const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const arr = [98, 74, 12]
    //const arr = [4, 5, 7, 5]
    //const arr = [1, 2, 3]
    const result = sansaXor(arr);
    console.log(result)

    //     ws.write(result + '\n');
    // }

    // ws.end();
}
main()
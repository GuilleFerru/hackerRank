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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {

    let unique = 0;

    for (let i = 0; i < a.length; i++) {

      //  console.log(unique ^=  a[i] )

       unique ^= a[i]


    }
    return unique

    // a.array.forEach(number => {


    //     const testNumber = number;

    // });


}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine().trim(), 10);

    // const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // const result = lonelyinteger(a);

    // ws.write(result + '\n');

    // ws.end();
    //const result = lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
    const result = lonelyinteger([34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31]);
    console.log(result)
}
main()
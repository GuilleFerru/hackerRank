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
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
    // Write your code here
    console.log(s)

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // let s = Array(3);

    // for (let i = 0; i < 3; i++) {
    //     s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    // }

    const result = formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]);
    console.log(result)
    //ws.write(result + '\n');

    //ws.end();
}
main()

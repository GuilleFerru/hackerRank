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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Write your code here

    if (v1 - v2 === 0) {
        return 'NO';
    } else {
        const t = (x2 - x1) / (v1 - v2);
        console.log(t)
        return Number.isInteger(t) && t >= 0 ? 'YES' : 'NO';
    }


}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    // const x1 = 2

    // const v1 = 1

    // const x2 = 1

    // const v2 = 2
    //const result = kangaroo(1817, 9931, 8417, 190)
    //const result = kangaroo(2, 1, 1, 2);
    const result = kangaroo(0, 2, 5, 3);
    console.log(result)

    // ws.write(result + '\n');

    // ws.end();
}
main()

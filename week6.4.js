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
 * Complete the 'gamingArray' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


// explota por tiempo --- en arrays muy grandes tarda mucho

function gamingArray(arr) {
    // Write your code here
    let count = 0;
    while (arr.length > 0) {
        const maxIndex = arr.indexOf(Math.max(...arr));
        arr = arr.slice(0, maxIndex)
        count++
    }
    return count % 2 === 0 ? 'ANDY' : 'BOB'
}

//optimizada --- Recorro una vez el array --
function gamingArray(arr) {
    // Write your code here
    let count = 0;
    let max = -Infinity;

    for (const key in arr) {
        if (arr[key] > max) {
            max = arr[key]
            count++
        }
    }
    return count % 2 === 0 ? 'ANDY' : 'BOB'
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const g = parseInt(readLine().trim(), 10);

    // for (let gItr = 0; gItr < g; gItr++) {
    //     const arrCount = parseInt(readLine().trim(), 10);

    //     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const arr = [1, 3, 5, 7, 9]
    //const arr = [7, 4, 6, 5, 9]
    //const arr = [2, 3, 5, 4, 1]
    const result = gamingArray(arr);
    console.log(result)
    //     ws.write(result + '\n');
    // }

    // ws.end();
}
main()

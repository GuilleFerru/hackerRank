'use strict';

<<<<<<< HEAD
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
=======
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
>>>>>>> 7f0a0e37896280f69304d90fdc726e76e6aa9162

/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function towerBreakers(n, m) {
    // Write your code here
    if (n % 2 === 0 || m === 1) {
        return 2
    } else {
        return 1
    }

}

<<<<<<< HEAD


function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const t = parseInt(readLine().trim(), 10);

    const t = 10;

    function generateRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    // const n = generateRandom(1, 10);
    // const m = generateRandom(1, 10);


    for (let tItr = 0; tItr < t; tItr++) {
        // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        // const n = parseInt(firstMultipleInput[0], 10);

        // const m = parseInt(firstMultipleInput[1], 10);

        const n = generateRandom(1, 10);
        const m = generateRandom(1, 10);
        //     const n = generateRandom(1, 1000000);
        // const m = generateRandom(1, 1000000);
        const result = towerBreakers(n, m);
        console.log(result)

        //      ws.write(result + '\n');
    }

    //    ws.end();
}
main()
=======
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        const result = towerBreakers(n, m);

        ws.write(result + '\n');
    }

    ws.end();
}
>>>>>>> 7f0a0e37896280f69304d90fdc726e76e6aa9162

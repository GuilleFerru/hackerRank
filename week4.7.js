'use strict';

<<<<<<< HEAD
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
=======
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
>>>>>>> 7f0a0e37896280f69304d90fdc726e76e6aa9162

/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
    // Write your code here
<<<<<<< HEAD

=======
>>>>>>> 7f0a0e37896280f69304d90fdc726e76e6aa9162
    let mindiff = Infinity;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            const diff = Math.abs(arr[i] - arr[j])
            if (diff < mindiff) {
                mindiff = diff
            }
        }
    }
    return mindiff

}

function main() {
<<<<<<< HEAD
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine().trim(), 10);

    // const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const arr = [3, -7, 0];

    const result = minimumAbsoluteDifference(arr);
    console.log(result)

    // ws.write(result + '\n');

    // ws.end();

}
main()
=======
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = minimumAbsoluteDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
>>>>>>> 7f0a0e37896280f69304d90fdc726e76e6aa9162

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
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    // Write your code here
    //bubble sort
    //const sorteArr = arr.sort((a, b) => a - b);
    let sortedArr = arr;
    let diff = 0;
    const restArr = []
    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < (sortedArr.length - i - 1); j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp
            }
        }
    }

    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 1; j < (sortedArr.length); j++) {
            diff = sortedArr[i] - sortedArr[j];
            const restObject = {
                'dif': diff,
                'val1': sortedArr[i],
                'val2': sortedArr[j]
            }
            restArr.push(restObject)

        
        }
    }


    const minDiff = Math.min(...restArr.map(obj => obj.val1));



    return minDiff

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine().trim(), 10);

    // const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    //const arr = [5, 2, 3, 4, 1]
    const arr = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470]

    const result = closestNumbers(arr);
    console.log(result)

    // ws.write(result.join(' ') + '\n');

    // ws.end();
}
main()

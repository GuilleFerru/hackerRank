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
    const magicOnes = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ];
    const flatArray = s.flat()

    const totalCosts = []

    for (let i = 0; i < magicOnes.length; i++) {
        let count = 0;
        for (let j = 0; j < 9; j++) {
            const flatVal = flatArray[j]
            const magicVal = magicOnes[i][j]
            count += Math.abs(flatVal - magicVal)
        }
        totalCosts.push(count)
    }

    return Math.min(...totalCosts)
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // let s = Array(3);

    // for (let i = 0; i < 3; i++) {
    //     s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    // }

    const result = formingMagicSquare([[1, 3, 8], [6, 4, 1], [2, 6, 5]]);
    //const result = formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]);
    console.log(result)
    //ws.write(result + '\n');

    //ws.end();
}
main()

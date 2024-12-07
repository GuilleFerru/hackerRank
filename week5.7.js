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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    // Write your code here
    let resp = 'YES'
    const orderedGrid = grid.map((characters) => {
        return characters.split('').sort().join('')
    })

    orderedGrid.reduce((acc, current) => {
        for (let i = 0; i < current.length; i++) {
            const charA = acc[i];
            const charB = current[i];
            if (charB < charA) {
                resp = 'NO'
                break
            }
        }
        return current
    })
    return resp

}


// function gridChallenge(grid) {
//     const orderedGrid = grid.map((characters) => {
//         return characters.split('').sort().join('');
//     });

//     for (let row = 1; row < orderedGrid.length; row++) {
//         for (let col = 0; col < orderedGrid[row].length; col++) {
//             console.log(orderedGrid[row][1])

//             if (orderedGrid[row][col] < orderedGrid[row - 1][col]) {
//                 return 'NO';
//             }
//         }
//     }

//     return 'YES';
// }

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // 1<= t <= 100
    const t = 1

    for (let tItr = 0; tItr < t; tItr++) {
        // 1<= n <= 100
        const n = 5

        let grid = [];

        // for (let i = 0; i < n; i++) {
        //     const gridItem = readLine();
        //     grid.push(gridItem);
        // }

        const result = gridChallenge(['mpxz', 'abcd', 'wlmf']);
        //const result = gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']);
        console.log(result)

        // ws.write(result + '\n');
    }

    //ws.end();
}
main()

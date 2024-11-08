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
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
    // Write your code here

    const sortedSticks = sticks.sort((a, b) => a - b);
    const sides = [];
    let nonDegenerateTriangles = [];

    for (let i = 0; i < sortedSticks.length; i++) {
        sides.push(sortedSticks[i]);
        if (sides.length === 3) {
            if ((sides[0] + sides[1] > sides[2]) && (sides[0] + sides[2] > sides[1]) && (sides[1] + sides[2] > sides[0])) {
                nonDegenerateTriangles = sides.slice();
                sides.shift();
            } else {
                sides.shift();
            }
        }
    }
    const result = nonDegenerateTriangles.length === 0 ? [-1] : nonDegenerateTriangles

    return result

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine().trim(), 10);

    // const sticks = readLine().replace(/\s+$/g, '').split(' ').map(sticksTemp => parseInt(sticksTemp, 10));
    //const sticks = [1, 2, 3]
    const sticks = [1, 2, 3, 4, 5, 10]
    //const sticks = [1, 1, 1, 2, 3, 5]
    const result = maximumPerimeterTriangle(sticks);
    console.log('result: ', result)

    // ws.write(result.join(' ') + '\n');

    // ws.end();
}
main()
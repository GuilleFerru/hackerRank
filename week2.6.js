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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

// function countingValleys(steps, path) {
//     // Write your code here


//     let seaLevel = true;
//     let up = 0;
//     let down = 0;
//     let valleyCount = 0;

//     for (let step = 0; step < steps; step++) {

//         if (seaLevel) {
//             if (path[step] === 'U') {
//                 up++;
//                 seaLevel = false;
//             } else {
//                 down++;
//                 valleyCount++;
//                 seaLevel = false;
//             }
//         } else {
//             path[step] === 'U' ? up++ : down++;
//             ((up - down) === 0) ? seaLevel = true : seaLevel = false
//         }

//     }

//     return valleyCount
// }



function countingValleys(steps, path) {
    let level = 0;  // Nivel del mar inicial
    let valleyCount = 0;
    
    for (let step = 0; step < steps; step++) {
        // Incrementar o decrementar el nivel según el paso
        if (path[step] === 'U') {
            level++;
            // Si volvemos al nivel del mar desde un valle, contamos un valle
            if (level === 0) {
                valleyCount++;
            }
        } else {
            level--;
        }
    }
    
    return valleyCount;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const steps = parseInt(readLine().trim(), 10);

    // const path = readLine();
    const result = countingValleys(8, 'DUDUUDDU');
    console.log(result)

    // ws.write(result + '\n');

    // ws.end();
}
main()

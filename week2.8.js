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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    const pattern = "SOS";
    let alteredCount = 0;
    
    // Iteramos sobre el mensaje recibido y comparamos con el patrón esperado
    for (let i = 0; i < s.length; i++) {
        console.log(pattern[i % 3])
        if (s[i] !== pattern[i % 3]) {  // i % 3 repite el patrón SOS
            alteredCount++;
        }
    }
    
    return alteredCount;
}

// function marsExploration(s) {
//     // Write your code here
//     const cosmicSOS = [];
//     let wrongLetters = 0;
//     for (let i = 0; i < s.length; i += 3) {
//         cosmicSOS.push(s.slice(i, i + 3))
//     }

//     cosmicSOS.forEach(sos => {
//         if (sos !== 'SOS') {
//             sos[0] !== 'S' && wrongLetters++
//             sos[1] !== 'O' && wrongLetters++
//             sos[2] !== 'S' && wrongLetters++
//         }
//     })
//     return wrongLetters
// }

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const s = readLine();

    const result = marsExploration('SOSSPSSQSSOR');
    //const result = marsExploration('OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS');
    //const result = marsExploration('S');
    console.log(result)

    // ws.write(result + '\n');

    // ws.end();
}
main()
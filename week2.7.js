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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    const regexp = /[A-Z]/gi;
    const uniqueLetters = [... new Set(s.toLowerCase().match(regexp))]
    return uniqueLetters.length === 26 ? 'pangram' : 'not pangram';
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const s = readLine();

    const result = pangrams('We promptly judged antique ivory buckles for the next prize');
    console.log(result)

    // ws.write(result + '\n');

    // ws.end();
}
main()
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
 * Complete the 'misereNim' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY s as parameter.
 */

function misereNim(s) {
    // Write your code here
    let player = 1;
    let nimSum = s.reduce((acc, current) => acc ^ current)
    const allOnes = s.every(pile => pile === 1)
    if (allOnes) {
        return s.length % 2 !== 0 ? 'Second' : 'First'
    }

    while (nimSum !== 0) {
        let minVal = Infinity
        let index = -1
        for (let i = 0; i < s.length; i++) {
            const newVal = s[i] ^ nimSum
            if (newVal < minVal) {
                minVal = newVal
                index = i
            }
        }
        s[index] = minVal
        nimSum = s.reduce((acc, current) => acc ^ current)
        player = 3 - player
    }
    return player === 1 ? 'Second' : 'First'
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    //    const t = parseInt(readLine().trim(), 10);

    const t = 1;
    //for (let tItr = 0; tItr < t; tItr++) {
        //const n = parseInt(readLine().trim(), 10);

        //const n = parseInt(readLine().trim(), 10);

        //const s = new Array(17).fill(1)
        const s = [3, 4, 5]
        //const s = [2, 1, 3]
        //console.log(s)
        //const s = [8, 5, 10, 10, 10, 3, 9, 2, 5, 2, 5, 3, 8]
        //const s = [8, 10, 10, 9, 4, 3, 6, 6, 3, 5, 7, 3, 8, 1, 10, 1, 6, 6, 2, 8, 7, 9, 2, 1, 3, 6, 9, 3, 3, 9, 4, 2, 8, 5, 1, 2, 8, 8, 9, 10, 2, 5, 2, 1, 8, 3, 1, 3, 10, 5, 2, 6, 3, 3, 8, 7, 8, 8, 10, 3, 6, 5, 4, 4, 10, 6, 7, 9, 3, 5, 8, 6, 2, 9, 8, 9, 1, 1, 1, 2, 5, 2, 7, 9, 6, 4, 5, 6, 1, 6, 8, 7, 3, 3, 2, 4, 1, 8, 2, 5];
        //const s = [9, 1, 2, 5, 8, 2, 5, 5, 2, 1, 10, 5, 3, 5, 3, 4, 9, 1, 8, 8];

        const result = misereNim(s);
        console.log(result)

        //ws.write(result + '\n');
    //}

    //ws.end();
}
main()

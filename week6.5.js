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
    const n = s.length;
    const magicNumber = (n * ((n * n) + 1)) / 2


    //const red = s.reduce((acc, curr) => Number(acc)+Number(curr))
    const y = s[1][1]



    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            if (s[0][1] !== (y - 1)){
                
            }
        }
    }

    return 'red'

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // let s = Array(3);

    // for (let i = 0; i < 3; i++) {
    //     s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    // }

    const result = formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]);
    console.log(result)
    //ws.write(result + '\n');

    //ws.end();
}
main()

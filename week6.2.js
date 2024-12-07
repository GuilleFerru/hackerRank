'use strict';

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

/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
let leftArray = []

function balancedSums(arr) {
    // Write your code here
    const total = arr.reduce((acc, current) => acc + current, 0)
    let leftValues = 0
    let resp = 'NO'
    
    arr.forEach(element => {
        const rightValues = total - leftValues - element
        if (rightValues === leftValues) resp = 'YES'
        leftValues += element
    });
    return resp

    //let i = 1;
    // do {
    //     if (arr.length === 1) {
    //         return 'YES'
    //     }
    //     else {
    //         const leftValues = arr.slice(0, i).reduce((acc, current) => acc + current, 0)
    //         const rightValues = arr.slice(i + 1, arr.length).reduce((acc, current) => acc + current, 0)
    //         console.log(leftValues, arr[i], rightValues)
    //         if (leftValues === rightValues) return 'YES'
    //     }
    //     i++
    // } while (i < arr.length - 1)
    // return resp

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = 1;

    for (let TItr = 0; TItr < T; TItr++) {
        //const n = parseInt(readLine().trim(), 10);

        const arr = [1, 1, 4, 1, 1];
        //const arr = [1, 1, 4, 1, 1];
        //const arr = [2, 0, 0, 0];
        const result = balancedSums(arr);
        console.log(result)

        //ws.write(result + '\n');
    }

    //ws.end();
}
main()
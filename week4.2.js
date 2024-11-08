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
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {

    const rotatedArr = new Array(arr.length).fill(0)
    let count = 0;




    // const rotatedArr = arr.map((value, index) => {
    //     console.log(index)
        
    //     if (index === 0){
    //         return value
    //     } 

    //     arr[index + 1]
    //     // if (index === 0) {
    //     //     return value[arr.length -1]
    //     // } else {
    //     //     return arr[index + 1]
    //     // }

    // });



        for (let i = 0; i < arr.length - 1; i++) {

            if (i === 0) {
                const last = arr.length - 1;
                rotatedArr[last] = arr[i]
                rotatedArr[i] = arr[i + 1]
            } else {
                rotatedArr[i] = arr[i + 1]
            }
        }
    
       


    return rotatedArr
    // Write your code here

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    // const n = parseInt(firstMultipleInput[0], 10);

    // const d = parseInt(firstMultipleInput[1], 10);

    // const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const d = 2;
    const arr = [1, 2, 3, 4, 5]

    const result = rotateLeft(d, arr);
    console.log(result)
    // ws.write(result.join(' ') + '\n');

    // ws.end();
}
main()

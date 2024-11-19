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
//     inputStr  ing = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k, arr) {
    // Write your code here

    const sortedArr = arr.sort((a, b) => a - b);
    let unfairness = Infinity;


    for (let i = 0; i < sortedArr.length; i++) {
        const min = sortedArr[i];
        const max = sortedArr[i + k - 1];
        const diff = max - min;
        if (diff < unfairness) unfairness = diff
        if (unfairness === 0) return 0
    }
    return unfairness


}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);


    const n = 1;
    const k = 3;

    // const n = parseInt(readLine().trim(), 10);

    // const k = parseInt(readLine().trim(), 10);

    //let arr = [10, 100, 300, 200, 1000, 20, 30];
    //let arr = [1,2,3,4,10,20,30,40,100,200];
    //let arr = [5,1,2,1,2,1];
    // for (let i = 0; i < n; i++) {
    //     const arrItem = [0,1,2,3,4];
    //     arr.push(arrItem);
    // }

    //8
    // const arr = [
    //     6327, 571, 6599, 479, 7897, 9322, 4518, 571, 6677, 7432, 815, 6920,
    //     4329, 4104, 7775, 5708, 7991, 5802, 8619, 6053, 7539, 7454, 9000, 3267, 6343,
    //     7165, 4095, 439, 5621, 4095, 153, 1948, 1018, 6752, 8779, 5267, 2426, 9649,
    //     2190, 9103, 7081, 3006, 2376, 7762, 3462, 151, 3471, 1453, 2305, 8442
    // ];

    //5
    // const arr = [
    //     4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822,
    //     1784, 7802, 3142, 9739, 5629, 5413, 7232
    // ];

    //3
    const arr = [100, 200, 300, 350, 400, 401, 402]




    const result = maxMin(k, arr);
    console.log(result)

    // ws.write(result + '\n');

    // ws.end();
}

main()

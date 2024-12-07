'use strict';

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
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

function countSort(arr) {
    // Write your code here
    const arrSize = arr.length;
    let max = 0
    let min = Infinity

    for (let i = 0; i < arrSize; i++) {
        const val = Number(arr[i][0]);
        if (i < arrSize / 2) arr[i][1] = '-';
        if (val > max) max = val;
        if (val < min) min = val;
    }

    const range = max + 1;
    const count = new Array(range).fill(0).map(() => []);

    for (let i = 0; i < arrSize; i++) {
        const val = Number(arr[i][0]);
        count[val].push(arr[i][1])
    }

    console.log(count.map(row => row.join(' ')).join(' ').trim())

}

function main() {
    // const n = parseInt(readLine().trim(), 10);

    let arr = [
        ['0', 'ab'], ['6', 'cd'],
        ['0', 'ef'], ['6', 'gh'],
        ['4', 'ij'], ['0', 'ab'],
        ['6', 'cd'], ['0', 'ef'],
        ['6', 'gh'], ['0', 'ij'],
        ['4', 'that'], ['3', 'be'],
        ['0', 'to'], ['1', 'be'],
        ['5', 'question'], ['1', 'or'],
        ['2', 'not'], ['4', 'is'],
        ['2', 'to'], ['4', 'the']
    ];

    // for (let i = 0; i < n; i++) {
    //     arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    // }

    countSort(arr);
}
main()
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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    // const book = [];
    // const regex = new RegExp(p, "gi");

    // for (let i = 2; i <= n; i += 2) {
    //     if (i === 2) book.push(`${i - 1}`)
    //     book.push(i === n ? `${i}` : `${i}-${i + 1}`);
    // }

    // const pageGroup = book.findIndex(pages => regex.test(pages));

    // if (pageGroup === 0 || ((book.length) - pageGroup) < 2) {
    //     return 0
    // } else {
    //     const atStart = Math.abs(0 - pageGroup);
    //     const atEnd = (book.length - 1) - pageGroup;
    //     return Math.min(atStart, atEnd)
    // }


    const fromStart = Math.floor(p / 2);
    const fromEnd = Math.floor(n / 2) - fromStart;    
    return Math.min(fromStart, fromEnd);


}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine().trim(), 10);

    // const p = parseInt(readLine().trim(), 10);

    // const n = 73201 // n° paginas del libro
    // const p = 57075// pagina deseada

    const n = 10 // n° paginas del libro
    const p = 5// pagina deseada

    const result = pageCount(n, p);
    console.log(result)

    // ws.write(result + '\n');

    // ws.end();
}
main()
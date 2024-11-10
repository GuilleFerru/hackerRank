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
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {

    const sString = s.toString()
    let resp = 'NO'


    for (let i = 0; i < sString.length; i++) {
        const initialDigits = sString.slice(0, i + 1);
        let newS = initialDigits;

        if (initialDigits.length != sString.length) {
            let digitSeq = initialDigits;

            while (newS.length < sString.length) {
                digitSeq++
                newS += digitSeq.toString()
            }

            if (newS === sString) {
                resp = `YES ${initialDigits}`
                break
            }

        }
    }

    console.log(resp)

}

function main() {
    //const q = parseInt(readLine().trim(), 10);

    const q = [
        [1234], //yes 1
        [91011], //yes 9
        [99100], //yes 99
        [101103],
        ['010203'],
        [13],
        [1],
    ]


    for (let qItr = 0; qItr < q.length; qItr++) {
        separateNumbers(...q[qItr]);
    }
}

main()
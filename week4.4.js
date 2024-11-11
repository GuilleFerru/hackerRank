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

// function separateNumbers(s) {
//     //     const sString = s.toString()
//     //     const length = sString.length;

//     //     for (let i = 1; i <= Math.floor(length / 2); i++) {
//     //         let startDigit = parseInt(sString.slice(0, i));
//     //         let current = startDigit;
//     //         let isValid = true;
//     //         let position = i;

//     //         while (position < length) {
//     //             current += 1;
//     //             const nextStr = current.toString();
//     //             const nextLength = nextStr.length;

//     //             if (sString.slice(position, position + nextLength) === nextStr) {
//     //                 console.log(`YES ${startDigit}`);
//     //                 break
//     //             }
//     //             position += nextLength;
//     //         }

//     //     }

//     //     console.log("NO");
//     // }




//     // function separateNumbers(sString) {

//     //     for (let i = 1; i <= Math.floor(sString.length / 2); i++) {
//     //         let startDigit = BigInt(sString.slice(0, i));
//     //         let constructedSequence = startDigit.toString();
//     //         let nextNumber = startDigit;

//     //         while (constructedSequence.length < sString.length) {
//     //             nextNumber += BigInt(1);
//     //             constructedSequence += nextNumber.toString();
//     //         }
//     //         if (constructedSequence === sString) {
//     //             console.log(`YES ${startDigit}`)
//     //         }
//     //     }
//     //     console.log("NO");
//     // }


//     const sString = s.toString()
//     let resp = 'NO'







//     for (let i = 0; i < sString.length; i++) {
//         const initialDigits = sString.slice(0, i + 1);
//         let newS = initialDigits;

//         if (initialDigits.length != sString.length) {
//             let digitSeq = parseInt(initialDigits);

//             while (newS.length < sString.length) {
//                 digitSeq++;
//                 newS += digitSeq.toString();
//             }

//             if (newS === sString) {
//                 resp = `YES ${initialDigits}`
//                 break
//             }

//         }


//         console.log(resp)
//     }
// }



function separateNumbers(s) {
    const sString = s.toString()
    let resp = 'NO'

    for (let i = 1; i <= Math.floor(sString.length / 2); i++) {

        let startDigit = BigInt(sString.slice(0, i));
        let constructedSequence = startDigit.toString();


        let nextNumber = startDigit;
        while (constructedSequence.length < sString.length) {
            nextNumber += BigInt(1);
            constructedSequence += nextNumber.toString();
        }


        if (constructedSequence === sString) {
            resp = `YES ${startDigit}`;
            break
        }
    }


    console.log(resp);
}

function main() {
    //const q = parseInt(readLine().trim(), 10);

    const q = [
        //[10111214],
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
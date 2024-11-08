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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    const resp = [];
    grades.map((grade) => {

        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        console.log(Math.ceil(grade/5)*5)

        if (grade < 38) {
            resp.push(grade)
        } else {
            const isGradeMultipleOfFive = grade % 5 === 0 ? true : false

            if (!isGradeMultipleOfFive) {
                let k = 1;
                let isMultiple = false;
                do {
                    const testMultiple = (grade + k)
                    isMultiple = testMultiple % 5 === 0 ? true : false
                    if (isMultiple) {
                        if (testMultiple - grade < 3) {
                            resp.push(grade + k)
                        } else {
                            resp.push(grade)
                        }
                    }
                    k++
                } while (!isMultiple)
            } else {
                resp.push(grade)
            }
        }
    })
    return resp
}


function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const gradesCount = parseInt(readLine().trim(), 10);

    // let grades = [];

    // for (let i = 0; i < gradesCount; i++) {
    //     const gradesItem = parseInt(readLine().trim(), 10);
    //     grades.push(gradesItem);
    // }

    const result = gradingStudents([73, 67, 38, 33]);
    console.log(result)

    // ws.write(result.join('\n') + '\n');

    // ws.end();
}
main()

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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    const sightedTypes = new Array(5).fill(0)

    for (let i = 0; i < arr.length; i++) {
        const type = arr[i]
        switch (type) {
            case 1:
                sightedTypes[0]++
                break
            case 2:
                sightedTypes[1]++
                break
            case 3:
                sightedTypes[2]++
                break
            case 4:
                sightedTypes[3]++
                break
            case 5:
                sightedTypes[4]++
                break
            default:
                console.log('something went wrong')
        }

    }

    const max = Math.max(...sightedTypes)
    let mostSightedType = sightedTypes.findIndex(sights => sights === max)

    return (mostSightedType+1)

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const arrCount = parseInt(readLine().trim(), 10);

    // const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds([1, 4, 4, 4, 5, 3, 3, 3]);
    console.log(result)

    // ws.write(result + '\n');

    // ws.end();
}
main()
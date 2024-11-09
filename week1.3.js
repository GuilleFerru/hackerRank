'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here

    console.log(s)
    const hour = s.slice(0, 2);
    const minute = s.slice(3, 5);
    const second = s.slice(6, 8);
    const ampm = s.slice(8, 10).toUpperCase();
    let convertedHour = hour;

    if (ampm === 'AM') {
        convertedHour = hour === '12' ? '00' : hour;
    } else {
        convertedHour = hour === '12' ? hour : (parseInt(hour) + 12).toString();

    }

    const convertedTime = `${convertedHour}:${minute}:${second}`;
    console.log(convertedTime)
    return convertedTime;





}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    //const s = readLine();

    const result = timeConversion('12:59:59aM');

    //  ws.write(result + '\n');

    //ws.end();
}

main()
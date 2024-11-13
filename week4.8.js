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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    let newK = k; // k%26
    if (k > 26) {
        const factor = Math.floor(k / 26)
        newK = k - (26 * factor);
    }

    const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const rotatedAlphabet = originalAlphabet.slice(newK) + originalAlphabet.slice(0, newK);
    let caesarCipher = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[^a-zA-Z0-9]/) || s[i].match(/^[0-9]/)) {

            caesarCipher += s[i]
        } else {

            const isUpperCase = s[i].match(/^[A-Z]/)
            const char = s[i].toLowerCase();
            const cipherChar = rotatedAlphabet[originalAlphabet.indexOf(char)];

            caesarCipher += isUpperCase ? cipherChar.toUpperCase() : cipherChar;

        }
    }
    return caesarCipher
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
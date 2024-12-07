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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

// El modificador global no es necesario para las pruebas con .test()

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong

    const numbers = /[0-9]/;
    const lowerCase = /[a-z]/;
    const upperCase = /[A-Z]/;
    const specialCharacters = /[!@#$%^&*()+-]/;
    let leftToBeStrong = 0;

    if (!numbers.test(password)) leftToBeStrong++
    if (!lowerCase.test(password)) leftToBeStrong++
    if (!upperCase.test(password)) leftToBeStrong++
    if (!specialCharacters.test(password)) leftToBeStrong++
    if ((n + leftToBeStrong) < 6) {
        leftToBeStrong += 6 - (n+leftToBeStrong);
    }
    return leftToBeStrong
}


// function minimumNumber(n, password) {
//     // Inicializamos los requisitos de fortaleza
//     let hasNumber = false;
//     let hasLowerCase = false;
//     let hasUpperCase = false;
//     let hasSpecialCharacter = false;

//     // Lista de caracteres especiales permitidos
//     const specialCharacters = "!@#$%^&*()+-";

//     // Iteramos sobre cada carácter en la contraseña
//     for (let char of password) {
//         if (char >= '0' && char <= '9') hasNumber = true; // Verifica números
//         else if (char >= 'a' && char <= 'z') hasLowerCase = true; // Verifica minúsculas
//         else if (char >= 'A' && char <= 'Z') hasUpperCase = true; // Verifica mayúsculas
//         else if (specialCharacters.includes(char)) hasSpecialCharacter = true; // Verifica caracteres especiales
//     }

//     // Contamos los requisitos que faltan
//     let leftToBeStrong = 0;
//     if (!hasNumber) leftToBeStrong++;
//     if (!hasLowerCase) leftToBeStrong++;
//     if (!hasUpperCase) leftToBeStrong++;
//     if (!hasSpecialCharacter) leftToBeStrong++;

//     // Asegurar que la longitud mínima sea de 6 caracteres
//     return Math.max(leftToBeStrong, 6 - n);
// }




function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine().trim(), 10);

    // const password = readLine();

    const n = 7;
    const password = 'AUzs-nV'

    const answer = minimumNumber(n, password);
    console.log(answer)

    // ws.write(answer + '\n');

    // ws.end();
}
main()

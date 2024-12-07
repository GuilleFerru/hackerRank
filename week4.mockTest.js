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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here

    const isAnagramable = s.length % 2 === 0 ? true : false;

    if (isAnagramable) {
        const stringLength = s.length
        const firstSubstring = s.slice(0, stringLength / 2);
        let secondSubstring = s.slice(stringLength / 2);
        let count = 0;
        
        for (let i = 0; i < firstSubstring.length; i++) {
            const a = firstSubstring[i];
            let match = false;

            for (let j = 0; j < secondSubstring.length; j++) {
                const b = secondSubstring[j];

                if (a === b) {
                    match = true;
                    secondSubstring = secondSubstring.slice(0, j) + secondSubstring.slice(j + 1);
                    break
                }
            }
            if (!match) count++
        }
        return count
    } else {
        return -1
    }


}

function main() {
    //  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    //const q = parseInt(readLine().trim(), 10);

    // const s = [
    //     ["hhpddlnnsjfoyxpciioigvjqzfbpllssuj"],
    //     ["xulkowreuowzxgnhmiqekxhzistdocbnyozmnqthhpievvlj"],
    //     ["dnqaurlplofnrtmh"],
    //     ["aujteqimwfkjoqodgqaxbrkrwykpmuimqtgulojjwtukjiqrasqejbvfbixnchzsahpnyayutsgecwvcqngzoehrmeeqlgknnb"],
    //     ["lbafwuoawkxydlfcbjjtxpzpchzrvbtievqbpedlqbktorypcjkzzkodrpvosqzxmpad"],
    //     ["drngbjuuhmwqwxrinxccsqxkpwygwcdbtriwaesjsobrntzaqbe"],
    //     ["ubulzt"],
    //     ["vxxzsqjqsnibgydzlyynqcrayvwjurfsqfrivayopgrxewwruvemzy"],
    //     ["xtnipeqhxvafqaggqoanvwkmthtfirwhmjrbphlmeluvoa"],
    //     ["gqdvlchavotcykafyjzbbgmnlajiqlnwctrnvznspiwquxxsiwuldizqkkaawpyyisnftdzklwagv"]
    // ];

    // const s = [
    //     ["a"],
    //     ["b"],
    //     ["c"],
    //     ["d"],
    //     ["e"],
    //     ["f"],
    //     ["g"],
    //     ["h"],
    //     ["i"],
    //     ["j"],
    //     ["k"],
    //     ["l"],
    //     ["m"],
    //     ["n"],
    //     ["o"],
    //     ["p"],
    //     ["q"],
    //     ["r"],
    //     ["s"],
    //     ["t"],
    //     ["u"],
    //     ["v"],
    //     ["w"],
    //     ["x"],
    //     ["y"],
    //     ["z"]
    // ];


    const s = [
        //[10111214],
        // ['aaabbb'], //yes 1
        // ['ab'], //yes 9
        // ['abc'], //yes 99
        // ['mnop'],
        // ['xyyx'],
        ['xaxbbbxx'],
    ]

    for (let qItr = 0; qItr < s.length; qItr++) {


        //const s = readLine();

        const result = anagram(...s[qItr]);;
        console.log(result)
        //ws.write(result + '\n');
    }

    //ws.end();
}
main()
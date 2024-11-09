function processData(input) {
    //Enter your code here


    const splitOperation = (word) => {
        return word.replace(/([a-z])([A-Z])/g, '$1 $2');
    }

    const combineOperation = (word) => {
        return word.replace(/\s\w/g, (match) => match.trim().toUpperCase())
    }

    //console.log(input)
    const lines = input.split('\n');
    const re = /(S|C);(M|C|V);/g;
    let reformedWords = '';

    //console.log(lines)

    lines.forEach(line => {
        const operation = line.slice(0, 4).replace(/;/g, '');
        let word = line.replace(line.match(re)[0], '');

        // console.log(operation)
        // console.log(word)

        if (operation.startsWith('S')) {
            splitedWord = splitOperation(word).toLowerCase();
            if (operation[1] === 'M') {
                splitedWord = splitedWord.replace(/[()]/g, '');
            }
            reformedWords = reformedWords.concat(splitedWord, '\n')
        }
        if (operation.startsWith('C')) {
            console.log('C',word)
            combinedWord = combineOperation(word);
            console.log('C',combinedWord)
            if (operation[1] === 'M') {
                console.log('M',combinedWord)
                reformedWords = reformedWords.concat(combinedWord,'()\n')
                console.log('M',reformedWords)
            }
            if (operation[1] === 'C') {
                //console.log('C',word)
                reformedWords = reformedWords.concat(combinedWord.charAt(0).toUpperCase() + combinedWord.slice(1), '\n')
            } else if (operation[1] === 'V') {
                reformedWords = reformedWords.concat(combinedWord, '\n')
            }
        }
    });

   console.log(reformedWords.trimEnd())

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
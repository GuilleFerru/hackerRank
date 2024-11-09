

function processData(input) {
    const splitOperation = (word) => {

        return word.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
    };

    const combineOperation = (word) => {
       return word.replace(/\s+(.)/g, (match, p1) => p1.toUpperCase());
    };

    const lines = input.split('\r\n');
    let reformedWords = '';

    lines.forEach(line => {
        if (!line) return;
        const operation = line[0];
        const type = line[2];
        let word = line.slice(4);

        if (operation === 'S') {
            let result = splitOperation(word);
            if (type === 'M') {
                result = result.replace(/[()]/g, '');
            }
            reformedWords += result + '\n';
        }

        else if (operation === 'C') {
            let result = combineOperation(word);
            if (type === 'M') {
                result = result.charAt(0).toLowerCase() + result.slice(1) + '()';
            } else if (type === 'C') {
                result = result.charAt(0).toUpperCase() + result.slice(1);
            } else if (type === 'V') {
                result = result.charAt(0).toLowerCase() + result.slice(1);
            }

            reformedWords += result + '\n';
        }
    });

    console.log(reformedWords.trimEnd());
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


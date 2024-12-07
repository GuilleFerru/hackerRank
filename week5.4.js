
function processData(input) {
    //Enter your code here
    const val = Math.floor(Math.sqrt(input))
    const div = input / val

    if (div === 1 || div === val)
        return true
    else
        return false

}

function main() {
    num = [1, 2, 7, 169]

    for (let index = 0; index < num.length; index++) {
        ans = processData(num[index])
        if (ans)
            console.log("yes")
        else
            console.log("no")


    }

}

main()
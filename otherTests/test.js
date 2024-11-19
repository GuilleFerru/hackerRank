

ayHungry = (arr) => {

    arr.map(values =>{
        console.log(values.sort((a, b) => a - b))
    })
    


    //console.log(arr)


}

const data = [
    [10, 11, 48, 16, 43, 29, 58, 33, 46, 5],
    [48, 8, 25, 37, 27, 43, 45, 12, 30, 30],
    [47, 32, 5, 49, 37, 60, 13, 40, 38, 22]
];


ayHungry(data)


// 63 59 75 49 53
// 73 57 67 55 53
// 65 53 75 79 71
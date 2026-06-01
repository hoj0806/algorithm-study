const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let matrix1 = f.slice(0, 3).map(row => row.split(" ").map(Number))
let matrix2 = f.slice(4, f.length).map(row => row.split(" ").map(Number))


for(let i = 0; i < matrix1.length; i++) {
    let result = ''
    for(let j = 0; j < matrix1[i].length; j++) {
        result += matrix1[i][j] * matrix2[i][j] + " "
    }
    console.log(result)
}


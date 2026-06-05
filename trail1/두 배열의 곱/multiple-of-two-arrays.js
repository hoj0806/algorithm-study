const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')



let matrix1 = f.slice(0, 3).map(i => i.split(" ").map(Number))
let matrix2 = f.slice(4, 7).map(i => i.split(" ").map(Number))
let matrix3 = Array(3).fill(0).map(() => Array(3).fill(0))


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matrix3[i][j] = matrix1[i][j] * matrix2[i][j]
    }
    console.log(matrix3[i].join(" "))
}
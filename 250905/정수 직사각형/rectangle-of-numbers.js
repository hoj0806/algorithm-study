const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [row, col] = input

let matrix = Array(row).fill(0).map(() => Array(col).fill(0))

for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
        matrix[i][j] = (3 * i) + (j + 1)
    }
    console.log(matrix[i].join(" "))
}
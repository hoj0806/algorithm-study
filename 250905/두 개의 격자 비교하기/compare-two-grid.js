const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [row, col] = input[0].split(" ").map(Number)

let matrix1 = []
let matrix2 = []

for(let i = 1; i <= row; i++) {
    matrix1.push(input[i].split(" "))
    matrix2.push(input[i+row].split(" "))
}

for(let i = 0; i < row; i++) {
    let answer = ''
    for(let j = 0; j < col; j++) {
        if(matrix1[i][j] === matrix2[i][j]) {
            answer += "0 "
        } else {
            answer += "1 "
        }
    }
    console.log(answer)
}


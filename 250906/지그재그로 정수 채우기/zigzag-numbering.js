const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [row, col] = input

let matrix = Array(row).fill(0).map(() => Array(col).fill(0))

let cnt = 0
for(let i = 0; i < col; i++) {
    let idx = i + 1
   
    if(idx % 2 !== 0) {
        for(let j = 0; j < row; j++) {
        matrix[j][i] = cnt
           cnt++
        }
    } else {
        for(let j = row - 1; j >=0; j--) {
            matrix[j][i] = cnt
               cnt++
        }
    }
}

for(let i = 0; i < row; i++) {
    console.log(matrix[i].join(" "))
}

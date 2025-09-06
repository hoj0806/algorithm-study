const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let matrix = Array(n).fill(0).map(() => Array(n).fill(0))

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(i === 0 || j === 0) {
            matrix[i][j] = 1
        } else {
            matrix[i][j] = matrix[i-1][j] + matrix[i][j-1] + matrix[i-1][j-1]
        }
    }
    console.log(matrix[i].join(" "))
}

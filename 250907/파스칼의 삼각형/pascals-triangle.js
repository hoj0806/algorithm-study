const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let matrix = Array(n).fill(0).map((_, i) => Array(i+1).fill(0))

for(let i = 0; i < n; i++) {
    
    for(let j = 0; j <= i; j++) {
        if(j === 0 || i === j) {
            matrix[i][j] = 1
        } else {
            matrix[i][j] = matrix[i-1][j-1]+matrix[i-1][j]
        }
    }

    console.log(matrix[i].join(" "))
}


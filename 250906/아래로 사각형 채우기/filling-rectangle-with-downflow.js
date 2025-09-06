const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let matrix = Array(n).fill(0).map(() => Array(n).fill(0))

for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
        matrix[i-1][j-1] = i + ((j - 1) * n)
    }

    let row = matrix[i-1]
    console.log(row.join(" "))
}
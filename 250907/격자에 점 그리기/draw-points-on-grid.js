const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [n, m] = input[0].split(" ").map(Number)

let matrix = Array(n).fill(0).map(() => Array(n).fill(0))

for(let i = 1; i <= m; i++) {
    let [x, y] = input[i].split(" ").map(Number)
    matrix[x-1][y-1] = i
}

for(let i = 0; i < n; i++) {
    console.log(matrix[i].join(" "))
}
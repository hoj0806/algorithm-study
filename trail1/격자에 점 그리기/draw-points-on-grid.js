const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let [n, m] = f[0].split(" ").map(Number)

let matrix = Array(n).fill(0).map(() => Array(n).fill(0))

let cnt = 1

for (let i = 1; i <= m; i++) {
    let [x, y] = f[i].split(" ").map(Number)
    matrix[x - 1][y - 1] = cnt
    cnt++
}

for (let i = 0; i < n; i++) {
    console.log(matrix[i].join(" "))
}
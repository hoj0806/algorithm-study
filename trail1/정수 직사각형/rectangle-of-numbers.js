const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [n, m] = f

let matrix = Array(n).fill(0).map(() => Array(m).fill(0))


let cnt = 1


for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        matrix[i][j] = cnt
        cnt++
    }
    console.log(matrix[i].join(" "))
}
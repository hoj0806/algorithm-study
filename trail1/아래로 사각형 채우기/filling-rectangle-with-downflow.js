const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let matrix = Array(n).fill(0).map(() => Array(n).fill(0))
let cnt = 1

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        matrix[j][i] = cnt
        cnt++
    }
}

for (let i = 0; i < n; i++) {
    console.log(matrix[i].join(" "))
}
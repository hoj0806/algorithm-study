const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split("\n")

let [a, b] = f[0].split(" ").map(Number)


let matrix = Array(a).fill(0).map(() => Array(a).fill(0))


for (let i = 1; i <= b; i++) {
    let [x, y] = f[i].split(" ").map(Number)
    matrix[x - 1][y - 1] = 1
}


for (let i = 0; i < a; i++) {
    console.log(matrix[i].join(" "))
}
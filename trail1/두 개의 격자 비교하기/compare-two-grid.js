const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let [n, m] = f[0].split(" ").map(Number)


let matrix1 = f.slice(1, n + 1).map(i => i.split(" ").map(Number))
let matrix2 = f.slice(n + 1, f.length).map(i => i.split(" ").map(Number))
let matrix3 = Array(n).fill(0).map(() => Array(m).fill(0))

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (matrix1[i][j] === matrix2[i][j]) {
            matrix3[i][j] = 0
        } else {
            matrix3[i][j] = 1
        }
    }
    console.log(matrix3[i].join(" "))
}




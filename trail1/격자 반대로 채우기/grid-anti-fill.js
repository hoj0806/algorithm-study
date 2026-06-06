const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)


let matrix = Array(n).fill(0).map(() => Array(n).fill(0))

let cnt = 1
let s = 1
for (let i = n - 1; i >= 0; i--) {

    if (s % 2 !== 0) {
        for (let j = n - 1; j >= 0; j--) {
            matrix[j][i] = cnt
            cnt++
        }
    } else {
        for (let j = 0; j < n; j++) {
            matrix[j][i] = cnt
            cnt++
        }
    }
    s++

}

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "))
}
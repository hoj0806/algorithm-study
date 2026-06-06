const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f
let matrix = Array(a).fill(0).map(() => Array(b).fill(0))
let cnt = 0

for (let i = 0; i < b; i++) {
    if (i % 2 === 0) {
        for (let j = 0; j < a; j++) {
            matrix[j][i] = cnt
            cnt++
        }
    } else {
        for (let j = a - 1; j >= 0; j--) {
            matrix[j][i] = cnt
            cnt++
        }
    }

}

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "))
}




const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let matrix = Array(n).fill(0).map(() => Array(n).fill(0))

let cnt = 1
for(let i = n-1; i >= 0; i--) {
    let idx = (n - 1) - i
    if(i % 2 !== 0) {
        for(let j = n-1; j >= 0; j--) {
        matrix[j][i] = cnt
        cnt++
        }
    } else {
        for(let j = 0; j <= n-1; j++) {
            matrix[j][i] = cnt
            cnt++
        }
    }
}


for(let i = 0; i < n; i++) {
    console.log(matrix[i].join(" "))
} 
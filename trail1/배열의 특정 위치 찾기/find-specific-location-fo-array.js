const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sum = 0
let sum2 = 0
let cnt = 0

for (let i = 0; i < f.length; i++) {
    if (i % 2 !== 0) sum += f[i]

    if ((i + 1) % 3 === 0) {
        cnt++
        sum2 += f[i]
    }
}


console.log(sum, (sum2 / cnt).toFixed(1))

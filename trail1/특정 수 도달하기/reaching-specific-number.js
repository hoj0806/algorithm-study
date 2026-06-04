const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sum = 0
let cnt = 0




for (let i = 0; i < f.length; i++) {
    if (f[i] >= 250) break

    sum += f[i]
    cnt++
}

console.log(sum , (sum / cnt).toFixed(1))


const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let max = -1000
let min = 1000

for (let i = 0; i < f.length; i++) {
    if (f[i] === 999 || f[i] === -999) break

    if (f[i] > max) max = f[i]

    if (f[i] < min) min = f[i]
}

console.log(max, min)


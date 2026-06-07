const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let maxValue = f[0]

for (let i = 1; i < f.length; i++) {
    if (f[i] > maxValue) maxValue = f[i]
}

console.log(maxValue)


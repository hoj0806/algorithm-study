const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let sum = 0
for (let i = 1; i <= f.length + 1; i++) {
    if (f[i] % 2 !== 0 && f[i] % 3 === 0) {
        sum += f[i]
    }
}

console.log(sum)
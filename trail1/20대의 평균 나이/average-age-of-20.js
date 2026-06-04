const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n').map(Number)


let idx = 0
let count = 0
let sum = 0

while (true) {
    let year = f[idx]

    if (year >= 30 || year < 20) {
        break
    }

    sum += year
    count++
    idx++

}

console.log((sum / count).toFixed(2))
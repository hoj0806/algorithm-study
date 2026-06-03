const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let a = 0
let b = 0
let c = 0

for (let i = 1; i <= n; i++) {
    if (i % 12 === 0) {
        c++
    } else if (i % 3 === 0) {
        b++
    } else if (i % 2 === 0) {
        a++
    }
}

console.log(a, b, c)
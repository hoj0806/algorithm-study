const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let prod = 1

for (let i = 1; i <= b; i++) {
    if (i % a === 0) prod *= i
}

console.log(prod)

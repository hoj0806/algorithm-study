const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f
let prod = 1

for (let i = a; i <= b; i++) {
    prod *= i
}

console.log(prod)
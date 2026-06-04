const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f


let sum = 0

for (let i = a; i <= b; i++) {
    if (i % 6 === 0 && i % 8 !== 0) sum += i
}

console.log(sum)
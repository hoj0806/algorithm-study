const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

let r = 0

for(let i = 1; i <= b; i++) {
    r+=i
}

console.log(r)
const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

for(let i = 1; i <= b; i++) {
    a+=b
    console.log(a)
}
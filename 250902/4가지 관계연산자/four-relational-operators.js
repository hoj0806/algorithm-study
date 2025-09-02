const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

console.log(a >= b ? 1 : 0)
console.log(a > b ? 1 : 0)
console.log(a <= b ? 1 : 0)
console.log(a < b ? 1 : 0)

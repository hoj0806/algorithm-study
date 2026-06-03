const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

console.log(a >= b ? 1 : 0)
console.log(a > b ? 1 : 0)
console.log(a <= b ? 1 : 0)
console.log(a < b ? 1 : 0)
console.log(a === b ? 1 : 0)
console.log(a !== b ? 1 : 0)

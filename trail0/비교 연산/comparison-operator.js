const fs = require('fs')
let p = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b] = p

console.log(a >= b ? 1 : 0)
console.log(a > b ? 1 : 0)
console.log(a <= b ? 1 : 0)
console.log(a < b ? 1 : 0)
console.log(a === b ? 1 : 0)
console.log(a !== b ? 1 : 0)

